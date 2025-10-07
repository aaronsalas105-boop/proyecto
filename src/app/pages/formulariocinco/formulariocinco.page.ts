import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariocinco',
  templateUrl: './formulariocinco.page.html',
  styleUrls: ['./formulariocinco.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton, IonIcon, IonLabel]
})
export class FormulariocincoPage {
  constructor(private router: Router) {}

  pagar() {
    console.log('Redirigiendo al pago...');
    // 🔥 Aquí más adelante se integrará Webpay o Supabase
    this.router.navigate(['/main']);
  }
}
