import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonLabel,
  IonCheckbox,
  IonItem
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ReservasService } from '../../services/reservas.service'; // ✅ mantiene tu import correcto

@Component({
  selector: 'app-formulariotres',
  templateUrl: './formulariotres.page.html',
  styleUrls: ['./formulariotres.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonTextarea,
    IonLabel,
    IonCheckbox,
    IonItem
  ]
})
export class FormulariotresPage {
  // 🧩 Variables del formulario
  rut = '';
  nombre = '';
  apellido = '';
  telefono = '';
  email = '';
  comentarios = '';
  aceptaTyC = false;

  constructor(private router: Router, private reservas: ReservasService) {}

  siguiente() {
    // ✅ Validaciones básicas
    if (!this.rut || !this.nombre || !this.apellido || !this.telefono || !this.email || !this.aceptaTyC) {
      alert('Por favor completa todos los campos obligatorios y acepta los términos.');
      return;
    }

    // ✅ Guardar los datos del adulto responsable en el servicio
    this.reservas.setAdulto({
      rut: this.rut,
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      email: this.email,
      comentarios: this.comentarios,
      aceptaTyC: this.aceptaTyC
    });

    console.log('✅ Datos del adulto guardados:', this.reservas.value);

    // 👉 Recién en el paso 4 se guardará en Supabase
    this.router.navigate(['/formulariocuatro']);
  }
}
