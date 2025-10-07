import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulariodos',
  templateUrl: './formulariodos.page.html',
  styleUrls: ['./formulariodos.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule, FormsModule],
})
export class FormulariodosPage {
  constructor(private router: Router) {}

  siguiente(paquete: string) {
    console.log('Siguiente presionado:', paquete);

    if (paquete === 'Super Fun') {
      this.router.navigate(['/formulariotres']);
    } else {
      console.log('Otro paquete:', paquete);
      // Aquí luego puedes agregar navegación a otras páginas si quieres
    }
  }
}
