import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class RewardsPage {
  productos = [
    {
      nombre: 'Pizza Familiar',
      descripcion: 'Masa fresca, salsa casera y queso derretido.',
      precio: 12990,
      imagen: '/assets/img/pizza1.png',
    },
    {
      nombre: 'Combo Chuck (Pizza + Bebida)',
      descripcion: 'Pizza mediana + bebida 500 ml.',
      precio: 9990,
      imagen: '/assets/img/pizza2.png',
    },
    {
      nombre: 'Torta de Cumpleaños',
      descripcion: 'Torta de chocolate para celebrar con estilo.',
      precio: 14990,
      imagen: '/assets/img/torta.png',
    },
    {
      nombre: 'Bandeja de Papas',
      descripcion: 'Crocantes, doradas y deliciosas.',
      precio: 5990,
      imagen: '/assets/img/papas.png',
    },
  ];

  carrito: any[] = [];
  total = 0;

  agregarAlCarrito(p: any) {
    this.carrito.push(p);
    this.total = this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  pagar() {
    alert(`💳 Has pagado $${this.total.toLocaleString()}.\n¡Gracias por tu compra! 🎉`);
    this.carrito = [];
    this.total = 0;
  }
}
