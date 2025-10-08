import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class PerfilPage {
  userEmail: string | null = null;
  userName: string | null = null;
  userPhone: string | null = null;
  userId: string | null = null;
  userAvatar: string | null = null;

  constructor(private supabaseService: SupabaseService, private router: Router) {
    this.getUserInfo();
  }

  async getUserInfo() {
    const { data } = await this.supabaseService.client.auth.getUser();
    const user: any = data.user; // 👈 esto soluciona el problema de tipo
  
    this.userEmail = user?.email ?? 'usuario@ejemplo.com';
    this.userId = user?.id ?? '20550454-0';
  
    // ✅ Recuperar información adicional del perfil (user_metadata)
    this.userName = user?.user_metadata?.nombre ?? 'Usuario';
    this.userPhone = user?.user_metadata?.telefono ?? '+56 9 0000 0000';
    this.userAvatar = user?.user_metadata?.avatar_url ?? null;
  }
  
  async onLogout() {
    const { error } = await this.supabaseService.client.auth.signOut();
    if (error) {
      alert('❌ Error al cerrar sesión: ' + error.message);
    } else {
      alert('👋 Sesión cerrada correctamente');
      this.router.navigate(['/login']);
    }
  }
}
