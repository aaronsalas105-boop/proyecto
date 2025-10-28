import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonFooter, IonLabel, IonModal
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
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
    IonLabel,
    IonModal
    // 👆 Ya no pongas IonSlides ni IonSlide
  ],
})
export class FoodPage {
  menuOpen = false;
  isModalOpen = false;
  modalData = { title: '', text: '' };

  constructor(private router: Router) {}

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private modalContents: Record<number, { title: string; text: string }> = {
    1: { title: 'Bienvenida y Kid Check', text: 'Con nuestro Kid Check, tu familia y tus invitados estarán seguros...' },
    2: { title: 'Juegos y Premios', text: 'Tras el ingreso, el anfitrión los llevará a la zona de cumpleaños...' },
    3: { title: 'Show de Chuck E. en vivo', text: 'En el show en vivo de Chuck E. Cheese hacemos que el festejado se sienta una estrella...' },
    4: { title: 'Ticket Blaster', text: '¡La lluvia de tickets es un momento especial para la estrella de cumpleaños!...' },
    5: { title: '¡Si antes eran buenos, ahora son mejores!', text: 'Disfruta de un espacio renovado con decoración, globos y sorpresas...' },
    6: { title: 'El mejor cumpleaños del universo para todos', text: 'Tus invitados y familiares podrán disfrutar de descuentos y promociones especiales...' },
  };

  openModal(id: number) {
    this.modalData = this.modalContents[id];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToVerAnfitrion() {
    this.router.navigate(['/veranfitrion']);
  }
}
