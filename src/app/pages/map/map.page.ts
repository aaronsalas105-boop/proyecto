import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonFooter, IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    IonLabel
  ],
})
export class MapPage {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // 🔹 Abre Google Maps con la dirección seleccionada
  abrirMaps(direccion: string) {
    const query = encodeURIComponent(direccion);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
  }
}
