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
export class RegisterPage {
  email = '';
  password = '';
  phone = '';

  constructor(private router: Router, private auth: AuthService) {}

  async onRegister() {
    // Validar campos
    if (!this.email || !this.password) {
      alert('Por favor, completa el correo y la contraseña.');
      return;
    }

    try {
      // Registrar usuario en Supabase
      const { user } = await this.auth.signUp(this.email, this.password);

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
