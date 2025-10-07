import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonItem, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonItem,
    IonIcon
  ],
})
export class LoginPage {
  constructor(private router: Router) {}

  onLogin() {
    console.log('Iniciar sesión');
    this.router.navigate(['/menu']);
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Olvidaste tu contraseña');
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
