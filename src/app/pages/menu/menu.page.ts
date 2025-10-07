import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonFooter, IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
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
export class MenuPage {
  menuOpen = false;   // 👈 estado del menú

  toggleMenu() {      // 👈 función que abre/cierra
    this.menuOpen = !this.menuOpen;
  }
}
