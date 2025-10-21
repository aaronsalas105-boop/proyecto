import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-juego1',
  templateUrl: './juego1.page.html',
  styleUrls: ['./juego1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton, IonIcon, IonLabel, RouterModule],
})
export class Juego1Page {
  modoSeleccionado: string = 'puntos';

  seleccionarModo(modo: string) {
    this.modoSeleccionado = modo;
  }
}
