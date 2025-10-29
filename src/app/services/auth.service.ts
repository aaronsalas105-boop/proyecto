import { Injectable, signal, inject } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { User } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private supabase = inject(SupabaseService);
  
  // Signals privados para el estado interno
  private _user = signal<User | null>(null);
  private _isLoading = signal<boolean>(false);

  // Signals de solo lectura expuestos públicamente
  user = this._user.asReadonly();
  isLoading = this._isLoading.asReadonly();

  constructor() {
    // Escuchar cambios en el estado de autenticación de Supabase
    this.supabase.client.auth.onAuthStateChange((event, session) => {
      this._user.set(session?.user ?? null);
      this._isLoading.set(false);
    });

    // Verificar sesión existente al inicializar
    this.checkSession();
  }

  // 🔵 Verificar sesión actual (al iniciar la app o recargar)
  private async checkSession() {
    this._isLoading.set(true);
    try {
      const { data, error } = await this.supabase.client.auth.getUser();
      if (!error && data.user) {
        this._user.set(data.user);
      } else {
        this._user.set(null);
      }
    } catch (error) {
      console.warn('⚠️ Error al verificar sesión:', error);
      this._user.set(null);
    } finally {
      this._isLoading.set(false);
    }
  }

  // 🟢 Registrar usuario nuevo con datos adicionales
  async signUp(email: string, password: string, nombre?: string, telefono?: string, avatar_url?: string) {
    this._isLoading.set(true);
    try {
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
    } finally {
      this._isLoading.set(false);
    }
  }

  // 🟢 Iniciar sesión
  async signIn(email: string, password: string) {
    this._isLoading.set(true);
    try {
      const { data, error } = await this.supabase.client.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // El estado se actualizará automáticamente via onAuthStateChange
      return data;
    } finally {
      this._isLoading.set(false);
    }
  }

  // 🔴 Cerrar sesión
  async signOut() {
    this._isLoading.set(true);
    try {
      const { error } = await this.supabase.client.auth.signOut();
      if (error) throw error;
      // El estado se actualizará automáticamente via onAuthStateChange
    } finally {
      this._isLoading.set(false);
    }
  }

  // 🟡 Método legacy para compatibilidad (deprecated)
  onAuthChange(callback: (event: string, session: any) => void) {
    return this.supabase.client.auth.onAuthStateChange((_event, session) => {
      callback(_event, session);
    });
  }

  // 🔵 Método legacy para compatibilidad (deprecated)
  async getUser() {
    const { data, error } = await this.supabase.client.auth.getUser();
    if (error) {
      console.warn('⚠️ Error al obtener usuario:', error.message);
      return null;
    }
    return data.user;
  }
}
