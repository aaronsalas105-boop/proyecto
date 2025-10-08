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
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
  ],
})

//definimos propiedades de la pag, email, password y phone y se asocian a los imputs de la pagina
export class RegisterPage {
  email = '';
  password = '';
  phone = '';
  nombre = '';
  avatar_url = ''; // URL opcional para foto de perfil

  constructor(private router: Router, private auth: AuthService) {}

  async onRegister() {
    // Validar campos
    if (!this.email || !this.password) {
      alert('Por favor, completa el correo y la contraseña.');
      return;
    }

    try {
      // Registrar usuario en Supabase con datos adicionales
      const { user } = await this.auth.signUp(
        this.email,
        this.password,
        this.nombre,
        this.phone,
        this.avatar_url
      );

      if (user) {
        console.log('✅ Usuario registrado:', user);
        alert('Cuenta creada correctamente. Revisa tu correo para confirmar la cuenta.');
        this.router.navigate(['/login']);
      }
    } catch (err: any) {
      console.error('❌ Error al crear cuenta:', err.message);
      alert('Error: ' + err.message);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
