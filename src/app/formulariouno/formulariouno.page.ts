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
import { Router } from '@angular/router'; // 👈 importa Router aquí

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

  // 👇 inyecta Router aquí
  constructor(private router: Router) {}

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

  // 👇 este método ahora redirige a formulariodos
  siguiente() {
    console.log('Datos ->', {
      zona: this.zonaSeleccionada,
      local: this.localSeleccionado,
      festejados: this.festejados,
      invitados: this.invitados,
      fecha: this.fechaISO,
    });

    this.router.navigate(['/formulariodos']);
  }
}
