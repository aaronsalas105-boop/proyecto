import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonDatetime,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formulariouno',
  templateUrl: './formulariouno.page.html',
  styleUrls: ['./formulariouno.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonDatetime,
  ],
})
export class FormulariounoPage {
  zonaSeleccionada: 'rm' | 'regiones' = 'rm';
  localesRM = ['La Florida', 'Los Trapenses', 'Open Kennedy', 'Plaza Norte', 'Plaza Oeste', 'Plaza Sur'];
  localesRegiones = ['Antofagasta', 'Concepción', 'La Serena', 'Puerto Montt', 'Temuco', 'Viña del Mar'];
  localesVisibles = this.localesRM;

  localSeleccionado: string | null = null;
  festejados: '1' | '2' = '1';
  invitados = 0;
  fechaISO: string | null = null;

  constructor(private router: Router, private reservas: ReservasService) {}

  onZonaChange(valor: 'rm' | 'regiones') {
    this.zonaSeleccionada = valor;
    this.localesVisibles = valor === 'rm' ? this.localesRM : this.localesRegiones;
    this.localSeleccionado = null;
  }

  onLocalChange(valor: any) {
    this.localSeleccionado = valor ? String(valor) : null;
  }

  onFechaChange(valor: any) {
    this.fechaISO = valor ? String(valor) : null;
  }

  validarInvitados() {
    // Solo muestra advertencia visual, no corrige el valor automáticamente
    if (this.invitados > 20) {
      console.warn('⚠️ Máximo 20 invitados permitidos');
    }
  }

  siguiente() {
    this.reservas.setPaso1(
      this.zonaSeleccionada,
      this.localSeleccionado,
      this.festejados,
      this.invitados,
      this.fechaISO
    );

    console.log('Datos guardados en ReservasService:', this.reservas.value);
    this.router.navigate(['/formulariodos']);
  }
}
