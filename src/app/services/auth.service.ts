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

  // 🔴 Cerrar sesión
  async signOut() {
    const { error } = await this.supabase.client.auth.signOut();
    if (error) throw error;
  }

  // 🔍 Obtener usuario actual (si está logueado)
  async getUser() {
    const { data, error } = await this.supabase.client.auth.getUser();
    if (error) throw error;
    return data.user;
  }
}
