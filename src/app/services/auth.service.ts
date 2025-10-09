import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private supabase: SupabaseService) {}

  // 🟢 Registrar usuario nuevo con datos adicionales
  async signUp(email: string, password: string, nombre?: string, telefono?: string, avatar_url?: string) {
    const { data, error } = await this.supabase.client.auth.signUp({
      email,
      password,
      options: {
        data: {
          nombre: nombre || '',
          telefono: telefono || '',
          avatar_url: avatar_url || '',
        },
      },
    });
    if (error) throw error;
    return data;
  }

  // 🟢 Iniciar sesión
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  // 🔵 Verificar sesión actual (al iniciar la app o recargar)
  async getUser() {
    const { data, error } = await this.supabase.client.auth.getUser();
    if (error) {
      console.warn('⚠️ Error al obtener usuario:', error.message);
      return null;
    }
    return data.user;
  }

  // 🟡 Escuchar cambios en el estado de autenticación
  onAuthChange(callback: (event: string, session: any) => void) {
    return this.supabase.client.auth.onAuthStateChange((_event, session) => {
      callback(_event, session);
    });
  }

  // 🔴 Cerrar sesión
  async signOut() {
    const { error } = await this.supabase.client.auth.signOut();
    if (error) throw error;
  }
}
