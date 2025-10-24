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
      cantidad: 0,
    },
    {
      nombre: 'Combo Chuck (Pizza + Bebida)',
      descripcion: 'Pizza mediana + bebida 500 ml.',
      precio: 9990,
      imagen: '/assets/img/pizza2.png',
      cantidad: 0,
    },
    {
      nombre: 'Torta de Cumpleaños',
      descripcion: 'Torta de chocolate para celebrar con estilo.',
      precio: 14990,
      imagen: '/assets/img/torta.png',
      cantidad: 0,
    },
    {
      nombre: 'Bandeja de Papas',
      descripcion: 'Crocantes, doradas y deliciosas.',
      precio: 5990,
      imagen: '/assets/img/papas.png',
      cantidad: 0,
    },
  ];

  extras = [
    {
      nombre: 'Bebida Grande',
      precio: 2990,
      emoji: '🥤',
      cantidad: 0,
    },
    {
      nombre: 'Hamburguesa Clásica',
      precio: 4990,
      emoji: '🍔',
      cantidad: 0,
    },
    {
      nombre: '+50 Fichas (10 Gratis)',
      precio: 6990,
      emoji: '🪙',
      cantidad: 0,
    },
  ];

  total = 0;

  /** 🔹 Aumentar producto del menú */
  agregarAlCarrito(producto: any) {
    producto.cantidad++;
    this.actualizarTotal();
  }

  /** 🔹 Disminuir cantidad del menú */
  disminuirCantidad(producto: any) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.actualizarTotal();
    }
  }

  /** 🔹 Agregar extra (bebida, hamburguesa, fichas) */
  agregarExtra(extra: any) {
    extra.cantidad++;
    this.actualizarTotal();
  }

  /** 🔹 Calcular total */
  actualizarTotal() {
    const totalProductos = this.productos.reduce(
      (acc, p) => acc + p.precio * p.cantidad,
      0
    );
    const totalExtras = this.extras.reduce(
      (acc, e) => acc + e.precio * e.cantidad,
      0
    );
    this.total = totalProductos + totalExtras;
  }

  /** 🔹 Pagar */
  pagar() {
    if (this.total === 0) {
      alert('Tu carrito está vacío 🛒');
      return;
    }

    const itemsComprados = [
      ...this.productos.filter((p) => p.cantidad > 0),
      ...this.extras.filter((e) => e.cantidad > 0),
    ];

    let resumen = itemsComprados
      .map((item) => `• ${item.nombre} x${item.cantidad}`)
      .join('\n');

    alert(`💳 Has pagado $${this.total.toLocaleString()}.\n\n🧾 Tu pedido:\n${resumen}`);

    // Reiniciar
    [...this.productos, ...this.extras].forEach((item) => (item.cantidad = 0));
    this.total = 0;
  }
}
