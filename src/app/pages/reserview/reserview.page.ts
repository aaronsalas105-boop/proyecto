import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-reserview',
  templateUrl: './reserview.page.html',
  styleUrls: ['./reserview.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon],
})
export class ReserviewPage implements OnInit {
  reservas: any[] = [];
  cargando = true;

  constructor(
    private reservasService: ReservasService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const user = await this.reservasService['auth'].getUser();
      if (!user) {
        console.warn('⚠️ Usuario no autenticado');
        this.cargando = false;
        return;
      }

      const { data, error } = await this.reservasService.client
        .from('reservas')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      this.reservas = data || [];
      console.log('✅ Reservas cargadas:', this.reservas);
    } catch (err) {
      console.error('❌ Error al cargar reservas:', err);
    } finally {
      this.cargando = false;
    }
  }

  async cancelarReserva(id: string) {
    if (!id) { console.warn('ID vacío'); return; }

    try {
      await this.reservasService.eliminarReserva(id);
      this.reservas = this.reservas.filter(r => r.id !== id); // quita del listado
    } catch (e) {
      console.error(e);
      alert('No se pudo cancelar la reserva.');
    }
  }

  // 🔹 Botón volver
  volver() {
    this.router.navigate(['/food']);
  }
}
