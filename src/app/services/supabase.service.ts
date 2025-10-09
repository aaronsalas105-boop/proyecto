import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://utzwgbtsgsdyiayefkxy.supabase.co',  // URL de tu proyecto Supabase
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0endnYnRzZ3NkeWlheWVma3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3OTc0MjUsImV4cCI6MjA3NTM3MzQyNX0._4TBVpYaqukJ-MRBpH_hdsVvD1kDtN8xoCznAzLJhuM',
      {
        auth: {
          persistSession: true,           // ✅ Guarda la sesión en localStorage
          storageKey: 'supabase.auth.token', // Nombre personalizado para tu token
          autoRefreshToken: true,          // ✅ Renueva el token automáticamente
          detectSessionInUrl: true,        // ✅ Reanuda sesión tras login o reload
        },
      }
    );
  }

  // Getter: permite acceder al cliente Supabase desde otros servicios o páginas
  get client() {
    return this.supabase;
  }
}
