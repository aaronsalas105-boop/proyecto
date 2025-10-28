import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-veranfitrion',
  templateUrl: './veranfitrion.page.html',
  styleUrls: ['./veranfitrion.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class VerAnfitrionPage {
  constructor(private router: Router) {}

  hosts = [
    { name: 'Joan', image: '/assets/img/host1.png', rating: 5, description: '¡Súper divertido y lleno de energía!' },
    { name: 'Aarón', image: '/assets/img/host2.png', rating: 4, description: '¡Siempre hace reír a todos!' },
    { name: 'Helen', image: '/assets/img/host3.png', rating: 5, description: '¡Súper carismática y alegre!' },
    { name: 'Munch', image: '/assets/img/host4.png', rating: 3, description: '¡Súper divertido!' },
    { name: 'Bella', image: '/assets/img/host5.png', rating: 4, description: '¡Llena de sorpresas y risas!' },
    { name: 'Tommy', image: '/assets/img/host6.png', rating: 4, description: '¡Alegre, dinámico y súper amigable!' },
  ];

  getStars(rating: number) {
    return Array.from({ length: 5 }, (_, i) => (i < rating ? 'star' : 'star-outline'));
  }

  selectHost(host: any) {
    this.router.navigate(['/formulariouno']);
  }
}
