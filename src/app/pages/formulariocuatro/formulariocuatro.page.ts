import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonDatetime,
  IonLabel,
  IonRadio,
  IonItem
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariocuatro',
  templateUrl: './formulariocuatro.page.html',
  styleUrls: ['./formulariocuatro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonDatetime,
    IonLabel,
    IonRadio,
    IonItem
  ]
})
export class FormulariocuatroPage {
  constructor(private router: Router) {}

  confirmarReserva() {
    console.log('Reserva confirmada');
    // 🔥 Aquí más adelante conectarás con Supabase o pantalla de confirmación
    this.router.navigate(['/formulariocinco']); // Puedes cambiar el destino luego
  }
}
