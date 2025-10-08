import { Injectable } from '@angular/core'; // decorador de angular: esta clase puede usarse en otros archivos
import { createClient, SupabaseClient } from '@supabase/supabase-js'; // createClient: crea la conexion a supabase, SupabaseClient: define q funciones puede usar el cliente
@Injectable({ providedIn: 'root' })//le dice a angular: este archivo puede usarse en toda la app sin importarlo a cada lado
export class SupabaseService { //crear, manejar y devolver cliente de supabase que se conecta a la base de datos
  private supabase: SupabaseClient; //crea una propiedad privada llamada supabase, tipo SupabaseClient


  //este constructorse ejecuta cuando la app inicia
  //usa createClient para conectar a supabase, y usar sus funciones
  constructor() {
    this.supabase = createClient(
      'https://utzwgbtsgsdyiayefkxy.supabase.co',  // URL de la app
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0endnYnRzZ3NkeWlheWVma3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3OTc0MjUsImV4cCI6MjA3NTM3MzQyNX0._4TBVpYaqukJ-MRBpH_hdsVvD1kDtN8xoCznAzLJhuM' // clave
    );
  }

  get client() { //es un GETTER: poder acceder al cliente desde otros archivos
    return this.supabase;
  }
}
