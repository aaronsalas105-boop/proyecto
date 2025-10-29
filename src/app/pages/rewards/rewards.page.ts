import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class RewardsPage {
  constructor(
    private supabase: SupabaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  productos = [
    { nombre: 'Pizza Familiar', descripcion: 'Masa fresca, salsa casera y queso derretido.', precio: 12990, imagen: '/assets/img/pizza1.png', cantidad: 0 },
    { nombre: 'Combo Chuck (Pizza + Bebida)', descripcion: 'Pizza mediana + bebida 500 ml.', precio: 9990, imagen: '/assets/img/pizza2.png', cantidad: 0 },
    { nombre: 'Torta de Cumpleaños', descripcion: 'Torta de chocolate para celebrar con estilo.', precio: 14990, imagen: '/assets/img/torta.png', cantidad: 0 },
    { nombre: 'Bandeja de Papas', descripcion: 'Crocantes, doradas y deliciosas.', precio: 5990, imagen: '/assets/img/papas.png', cantidad: 0 },
  ];

  extras = [
    { nombre: 'Bebida Grande', precio: 2990, emoji: '🥤', cantidad: 0 },
    { nombre: 'Hamburguesa Clásica', precio: 4990, emoji: '🍔', cantidad: 0 },
    { nombre: '+50 Fichas (10 Gratis)', precio: 6990, emoji: '🪙', cantidad: 0 },
  ];

  total = 0;

  /** 🔹 Aumentar producto */
  agregarAlCarrito(producto: any) {
    producto.cantidad++;
    this.actualizarTotal();
  }

  /** 🔹 Disminuir cantidad */
  disminuirCantidad(producto: any) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.actualizarTotal();
    }
  }

  /** 🔹 Agregar extra */
  agregarExtra(extra: any) {
    extra.cantidad++;
    this.actualizarTotal();
  }

  /** 🔹 Calcular total */
  actualizarTotal() {
    const totalProductos = this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const totalExtras = this.extras.reduce((acc, e) => acc + e.precio * e.cantidad, 0);
    this.total = totalProductos + totalExtras;
  }

  /** 🔹 Guardar pedido en Supabase y redirigir al voucher */
  async pagar() {
    if (this.total === 0) {
      this.mostrarToast('Tu carrito está vacío 🛒', 'warning');
      return;
    }

    const itemsComprados = [
      ...this.productos.filter((p) => p.cantidad > 0),
      ...this.extras.filter((e) => e.cantidad > 0),
    ];

    try {
      const { data: session } = await this.supabase.client.auth.getSession();
      const user = session?.session?.user;

      if (!user) {
        this.mostrarToast('Debes iniciar sesión para comprar 🔒', 'danger');
        return;
      }

      const { data, error } = await this.supabase.client
        .from('pedidos')
        .insert({
          usuario_id: user.id,
          total: this.total,
          items: itemsComprados,
        })
        .select('id')
        .single();

      if (error) throw error;

      // 🚀 Redirigir al voucher
      this.router.navigate(['/voucher', data.id]);

      // Reiniciar carrito
      [...this.productos, ...this.extras].forEach((item) => (item.cantidad = 0));
      this.total = 0;

    } catch (err: any) {
      console.error('Error al guardar pedido:', err.message);
      this.mostrarToast('❌ Error al guardar pedido', 'danger');
    }
  }

  /** 🔹 Toast bonito */
  async mostrarToast(mensaje: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      color,
    });
    await toast.present();
  }
}
