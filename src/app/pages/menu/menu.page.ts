import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonFooter, IonLabel
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

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
  menuOpen = false;

  // Usar inject() para servicios
  private router = inject(Router);
  private auth = inject(AuthService);

  // Exponer signals del AuthService para usar en el template
  get user() {
    return this.auth.user();
  }

  get isLoading() {
    return this.auth.isLoading();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
    this.menuOpen = false; // 🔹 Cierra el menú al navegar
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
