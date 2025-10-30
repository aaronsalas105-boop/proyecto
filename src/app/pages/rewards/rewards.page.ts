import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cart, add, remove } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class RewardsPage {
  cartCount = 0;
  cartItems: any[] = [];
  total = 0;
  open = false;
  presentingElement: HTMLElement | null = null;

  constructor(private router: Router) {
    addIcons({ cart, add, remove });
  }

  ngOnInit() {
    // Asocia el modal al contenido principal
    this.presentingElement = document.querySelector('ion-content');
  }

  items = [
    {
      name: 'La Súper Pizza de Pasqually',
      description: 'Masa fresca, salsa casera y queso derretido.',
      price: 12990,
      image: '/assets/img/pizza1.png',
      character: '/assets/img/pasqually.png',
      isCombo: false,
      quantity: 0,
    },
    {
      name: 'Combo Chuck (Pizza + Bebida)',
      description: 'Pizza mediana + bebida 500 ml.',
      price: 9990,
      image: '/assets/img/pizza2.png',
      character: '/assets/img/chuck.png',
      isCombo: true,
      quantity: 0,
    },
    {
      name: 'El Pastel de Fiesta de Helen',
      description: 'Torta de chocolate para celebrar con estilo.',
      price: 14990,
      image: '/assets/img/torta.png',
      character: '/assets/img/helen.png',
      isCombo: false,
      quantity: 0,
    },
    {
      name: 'Las Papas Monstruosas de Mr. Munch',
      description: 'Crocantes, doradas y deliciosas.',
      price: 5990,
      image: '/assets/img/papas.png',
      character: '/assets/img/munch.png',
      isCombo: false,
      quantity: 0,
    },
  ];

  increase(item: any) {
    item.quantity++;
    this.cartCount++;
    this.updateCart();
    this.showTickets(item);
  }

  decrease(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.cartCount--;
      this.updateCart();
    }
  }

  private updateCart() {
    this.cartItems = this.items.filter((i) => i.quantity > 0);
    this.total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  openCart() {
    if (this.cartItems.length > 0) {
      this.open = true;
    }
  }

  showTickets(item: any) {
    const card = document.querySelector('.menu-card')!;
    const ticket = document.createElement('div');
    ticket.classList.add('ticket-burst');
    ticket.textContent = '+10 Tickets 🎟️';
    card.appendChild(ticket);
    setTimeout(() => ticket.remove(), 800);
  }

  goToVoucher() {
    this.open = false;
    this.router.navigate(['/voucher']);
  }
}
