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
import { ReservasService } from '../../services/reservas.service'; // 👈 IMPORTANTE

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
  constructor(
    private router: Router,
    private reservasService: ReservasService // 👈 INYECTAMOS el servicio
  ) {}

  async confirmarReserva() {
    try {
      const id = await this.reservasService.guardarEnSupabase(); // 🔥 Guarda en Supabase
      console.log('✅ Reserva guardada con ID:', id);

      // Navega al resumen (formulario 5)
      this.router.navigate(['/formulariocinco']);
    } catch (error) {
      console.error('❌ Error al guardar reserva:', error);
      alert('Ocurrió un error al guardar tu reserva. Revisa tu conexión o inicia sesión nuevamente.');
    }
  }
}
