import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonItem,
  ],
})
export class NewPage {
  password = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async onSavePassword() {
    if (!this.password) {
      alert('Por favor, ingresa tu nueva contraseña.');
      return;
    }

    const { error } = await this.supabase.client.auth.updateUser({
      password: this.password,
    });

    if (error) {
      console.error('❌ Error al actualizar contraseña:', error.message);
      alert('Error: ' + error.message);
    } else {
      alert('✅ Tu contraseña se actualizó correctamente.');
      this.router.navigate(['/login']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
