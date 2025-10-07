import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
  ],
})
export class MainPage {
  constructor(private router: Router) {}

  onIniciarSesion() {
    this.router.navigate(['/login']);
  }

  onCrearCuenta() {
    this.router.navigate(['/register']);
  }
}
