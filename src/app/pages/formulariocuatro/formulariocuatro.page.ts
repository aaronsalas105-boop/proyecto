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
import { ReservasService } from '../../services/reservas.service';

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
  nombre = '';
  apellido = '';
  edad: number | null = null;
  fechaNacISO: string | null = null;
  colegio = '';
  noEscolar = false;

  constructor(
    private router: Router,
    private reservasService: ReservasService
  ) {}

  async confirmarReserva() {
    try {
      // 🔹 Guardamos datos del niño en el borrador (draft)
      this.reservasService.setNino({
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        fechaNacISO: this.fechaNacISO,
        colegio: this.colegio,
        noEscolar: this.noEscolar
      });

      // 🔹 Luego insertamos en Supabase
      const id = await this.reservasService.guardarEnSupabase();
      console.log('✅ Reserva guardada con ID:', id);

      this.router.navigate(['/formulariocinco']);
    } catch (error) {
      console.error('❌ Error al guardar reserva:', error);
      alert('Ocurrió un error al guardar tu reserva. Revisa tu conexión o inicia sesión nuevamente.');
    }
  }
}
