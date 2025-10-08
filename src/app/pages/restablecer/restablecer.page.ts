import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';
import { SupabaseService } from '../../services/supabase.service';
import { Capacitor } from '@capacitor/core'; // 👈 Importante

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonItem
  ],
})
export class RestablecerPage {
  email = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async onResetPassword() {
    if (!this.email) {
      alert('Por favor, ingresa tu correo.');
      return;
    }

    try {
      // Detecta si está corriendo en app o navegador
      const isNative = Capacitor.isNativePlatform();
      const redirectUrl = isNative
        ? 'capacitor://localhost/new' // 📱 En app compilada
        : 'http://localhost:8100/new'; // 💻 En navegador

      console.log('🔗 Redirigiendo a:', redirectUrl);

      const { error } = await this.supabase.client.auth.resetPasswordForEmail(this.email, {
        redirectTo: redirectUrl,
      });

      if (error) throw error;

      alert('📩 Te enviamos un correo para restablecer tu contraseña.');
      this.router.navigate(['/login']);
    } catch (err: any) {
      console.error('❌ Error al enviar correo:', err.message);
      alert('Error: ' + err.message);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
