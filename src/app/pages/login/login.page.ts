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
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
    IonItem,
    IonIcon,
  ],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router, private auth: AuthService) {}

  async onLogin() {
    // ✅ 1. Validar campos vacíos
    if (!this.email || !this.password) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    try {
      // ✅ 2. Llamar al servicio Supabase
      const { user } = await this.auth.signIn(this.email, this.password);

      // ✅ 3. Verificar si realmente se devolvió un usuario válido
      if (user) {
        console.log('✅ Inicio de sesión exitoso:', user);
        this.router.navigate(['/menu']); // cambia '/menu' por tu página principal
      } else {
        alert('Credenciales incorrectas o usuario no existe.');
      }
    } catch (err: any) {
      console.error('❌ Error al iniciar sesión:', err.message);
      alert('Correo o contraseña incorrectos.');
    }
  }

  async onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Olvidaste tu contraseña');
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
