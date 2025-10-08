import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservasService } from '../../services/reservas.service'; // ✅ Importa el servicio

@Component({
  selector: 'app-formulariodos',
  templateUrl: './formulariodos.page.html',
  styleUrls: ['./formulariodos.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule, FormsModule],
})
export class FormulariodosPage {
  constructor(
    private router: Router,
    private reservasService: ReservasService
  ) {}

  // 👇 acepta los tres tipos posibles
  siguiente(paquete: 'Super Fun' | 'Ultra Fun' | 'Mega Fun') {
    this.reservasService.setPaquete(paquete);

    console.log('✅ Paquete seleccionado:', paquete);
    console.log('📦 Datos acumulados en la reserva:', this.reservasService.value);

    this.router.navigate(['/formulariotres']);
  }
}
