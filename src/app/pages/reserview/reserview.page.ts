import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-reserview',
  templateUrl: './reserview.page.html',
  styleUrls: ['./reserview.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  ],
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

      this.reservas = (data || []).map(r => ({
        ...r,
        invitados: r.invitados ?? 0,
        festejados: r.festejados ?? 1,
      }));

      console.log('✅ Reservas cargadas:', this.reservas);
    } catch (err) {
      console.error('❌ Error al cargar reservas:', err);
    } finally {
      this.cargando = false;
    }
  }

  verificarLimites(r: any) {
    if (r.invitados > 10) console.warn('⚠️ Excedió el máximo de niños permitido (10)');
    if (r.festejados > 2) console.warn('⚠️ Excedió el máximo de adultos permitido (2)');
  }

  async cancelarReserva(id: string) {
    if (!id) { console.warn('ID vacío'); return; }

    try {
      await this.reservasService.eliminarReserva(id);
      this.reservas = this.reservas.filter(r => r.id !== id);
    } catch (e) {
      console.error(e);
      alert('No se pudo cancelar la reserva.');
    }
  }

  volver() {
    this.router.navigate(['/food']);
  }

  async actualizarReserva(r: any) {
    try {
      if (r.invitados > 10 || r.festejados > 2) {
        alert('❌ Límite excedido: máximo 10 niños y 2 adultos.');
        return;
      }

      const { error } = await this.reservasService.client
        .from('reservas')
        .update({
          invitados: r.invitados,  // niños invitados
          festejados: r.festejados // adultos acompañantes
        })
        .eq('id', r.id);

      if (error) throw error;

      alert('✅ Reserva actualizada correctamente');
    } catch (err) {
      console.error('❌ Error al actualizar la reserva:', err);
      alert('Hubo un error al actualizar la reserva.');
    }
  }
}
