import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonItem
  ],
})
export class RegisterPage {
  constructor(private router: Router) {}

  onRegister() {
    console.log('Crear cuenta');
    // lógica de registro aquí
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
