import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';

export interface ReservaDraft {
  zona?: 'rm' | 'regiones';
  sede?: string | null;
  fechaISO?: string | null;
  festejados?: number;   // 1 o 2
  invitados?: number;

  paquete?: 'Super Fun' | 'Ultra Fun' | 'Mega Fun';

  // Adulto
  rut?: string;
  nombreAdulto?: string;
  apellidoAdulto?: string;
  telefono?: string;
  emailAdulto?: string;
  comentarios?: string;
  aceptaTyC?: boolean;

  // Festejado
  nombreNino?: string;
  apellidoNino?: string;
  edad?: number | null;
  fechaNacISO?: string | null;
  colegio?: string | null;
  noEscolar?: boolean;

  // Cálculos
  subtotal?: number | null;
  montoAbonar?: number | null;
}

@Injectable({ providedIn: 'root' })
export class ReservasService {
  private draft: ReservaDraft = {};
  public ultimaReservaId: string | null = null;

  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  /** 🔹 Acceso público al cliente Supabase (para otras páginas) */
  public get client() {
    return this.supabase.client;
  }

  /** 🔹 Acceso público al servicio de autenticación */
  public get authService() {
    return this.auth;
  }

  /** 🔹 Reset de borrador */
  reset() {
    this.draft = {};
    this.ultimaReservaId = null;
  }

  get value(): ReservaDraft {
    return this.draft;
  }

  /** 🔹 Paso 1: Datos base */
  setPaso1(
    zona: 'rm' | 'regiones',
    sede: string | null,
    festejados: '1' | '2',
    invitados: number,
    fechaISO: string | null
  ) {
    this.draft.zona = zona;
    this.draft.sede = sede;
    this.draft.festejados = Number(festejados || 1);
    this.draft.invitados = Number(invitados || 0);
    this.draft.fechaISO = fechaISO || null;
  }

  /** 🔹 Paso 2: Selección de paquete */
  setPaquete(paquete: 'Super Fun' | 'Ultra Fun' | 'Mega Fun') {
    this.draft.paquete = paquete;
  }

  /** 🔹 Paso 3: Datos del adulto responsable */
  setAdulto(data: {
    rut: string;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    comentarios?: string;
    aceptaTyC: boolean;
  }) {
    this.draft.rut = data.rut;
    this.draft.nombreAdulto = data.nombre;
    this.draft.apellidoAdulto = data.apellido;
    this.draft.telefono = data.telefono;
    this.draft.emailAdulto = data.email;
    this.draft.comentarios = data.comentarios || '';
    this.draft.aceptaTyC = !!data.aceptaTyC;
  }

  /** 🔹 Paso 4: Datos del festejado */
  setNino(data: {
    nombre: string;
    apellido: string;
    edad: number | null;
    fechaNacISO: string | null;
    colegio?: string | null;
    noEscolar?: boolean;
  }) {
    this.draft.nombreNino = data.nombre;
    this.draft.apellidoNino = data.apellido;
    this.draft.edad = data.edad ?? null;
    this.draft.fechaNacISO = data.fechaNacISO || null;
    this.draft.colegio = data.colegio || null;
    this.draft.noEscolar = !!data.noEscolar;
  }

  /** 🔹 Cálculo de precios */
  private precioPorPaquete(paquete?: string): number {
    switch (paquete) {
      case 'Super Fun': return 14990;
      case 'Ultra Fun': return 16990;
      case 'Mega Fun': return 20990;
      default: return 0;
    }
  }

  private calcularMontos() {
    const totalNinos = (this.draft.festejados ?? 1) + (this.draft.invitados ?? 0);
    const precioUnit = this.precioPorPaquete(this.draft.paquete);
    this.draft.subtotal = totalNinos * precioUnit;
    this.draft.montoAbonar = 40000; // anticipo simulado
  }

  /** 🔹 Inserta la reserva completa en Supabase */
  async guardarEnSupabase(): Promise<string> {
    this.calcularMontos();
    const user = await this.auth.getUser();
    if (!user) throw new Error('Usuario no logueado');

    const { data, error } = await this.supabase.client
      .from('reservas')
      .insert({
        user_id: user.id,
        zona: this.draft.zona,
        sede: this.draft.sede,
        fecha: this.draft.fechaISO,
        festejados: this.draft.festejados,
        invitados: this.draft.invitados,

        paquete: this.draft.paquete,

        rut_adulto: this.draft.rut,
        nombre_adulto: this.draft.nombreAdulto,
        apellido_adulto: this.draft.apellidoAdulto,
        telefono_adulto: this.draft.telefono,
        email_adulto: this.draft.emailAdulto,
        comentarios: this.draft.comentarios,
        acepta_tyc: this.draft.aceptaTyC,

        nombre_festejado: this.draft.nombreNino,
        apellido_festejado: this.draft.apellidoNino,
        edad_festejado: this.draft.edad,
        fecha_nac: this.draft.fechaNacISO,
        colegio: this.draft.colegio,
        no_escolar: this.draft.noEscolar,

        subtotal: this.draft.subtotal,
        monto_abonar: this.draft.montoAbonar,
        estado: 'pendiente'
      })
      .select('id')
      .single();

    if (error) throw error;
    this.ultimaReservaId = data.id;
    return data.id as string;
  }

  /** 🔹 Obtiene todas las reservas del usuario actual */
  async obtenerReservasUsuario() {
    const user = await this.auth.getUser();
    if (!user) throw new Error('Usuario no autenticado');

    const { data, error } = await this.supabase.client
      .from('reservas')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
}
