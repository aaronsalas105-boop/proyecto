import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-reserview',
  templateUrl: './reserview.page.html',
  styleUrls: ['./reserview.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonList, IonItem, IonLabel],
})
export class ReserviewPage implements OnInit {
  reservas: any[] = [];
  cargando = true;

  constructor(private reservasService: ReservasService) {}

  async ngOnInit() {
    try {
      const user = await this.reservasService['auth'].getUser();
      if (!user) {
        console.warn('⚠️ Usuario no autenticado');
        this.cargando = false;
        return;
      }

      // ✅ Usa el cliente correcto
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
}
