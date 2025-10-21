import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.page.html',
  styleUrls: ['./juego2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, IonIcon, IonLabel, RouterModule],
})
export class Juego2Page implements OnInit {
  productoSeleccionado: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.productoSeleccionado = params['modo'] || 'puntos';
    });
  }
}
