import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonFooter, IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
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
export class CardPage {
  showDetails = false;
  menuOpen = false;   // 👈 ahora existe la propiedad

  toggleCard() {
    this.showDetails = !this.showDetails;
  }

  toggleMenu() {      // 👈 ahora existe el método
    this.menuOpen = !this.menuOpen;
  }
}
