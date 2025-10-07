import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonLabel,
  IonCheckbox,
  IonItem
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariotres',
  templateUrl: './formulariotres.page.html',
  styleUrls: ['./formulariotres.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonTextarea,
    IonLabel,
    IonCheckbox,
    IonItem
  ]
})
export class FormulariotresPage {
  constructor(private router: Router) {}

  siguiente() {
    console.log('Formulario enviado correctamente');
    this.router.navigate(['/formulariocuatro']); // 🔥 Ahora lleva al siguiente formulario
  }
}
