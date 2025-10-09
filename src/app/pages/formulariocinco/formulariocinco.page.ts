import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-formulariocinco',
  templateUrl: './formulariocinco.page.html',
  styleUrls: ['./formulariocinco.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonLabel,
    RouterModule
  ]
})
export class FormulariocincoPage implements OnInit {
  reserva: any = null;
  cargando = true;

  constructor(private reservasService: ReservasService, private router: Router) {}

  async ngOnInit() {
    try {
      const id = this.reservasService.getUltimaReservaId();
      if (!id) {
        alert('No se encontró una reserva activa');
        this.router.navigate(['/reserview']);
        return;
      }

      const { data, error } = await this.reservasService.client
        .from('reservas')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      this.reserva = data;
    } catch (error) {
      console.error('❌ Error al obtener reserva:', error);
      alert('Error al obtener la reserva');
      this.router.navigate(['/reserview']);
    } finally {
      this.cargando = false;
    }
  }

  async pagarReserva() {
    try {
      const response = await fetch(
        'https://utzwgbtsgsdyiayefkxy.supabase.co/functions/v1/create-transaction',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0endnYnRzZ3NkeWlheWVma3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3OTc0MjUsImV4cCI6MjA3NTM3MzQyNX0._4TBVpYaqukJ-MRBpH_hdsVvD1kDtN8xoCznAzLJhuM'
          },
          body: JSON.stringify({
            monto: this.reserva?.monto_abonar || 40000,
            reservaId: this.reserva?.id || `reserva-${Date.now()}`
          })
        }
      );

      const result = await response.json();
      console.log('Respuesta Supabase → Webpay:', result);

      if (result.ok && result.data?.token && result.data?.url) {
        const { url, token } = result.data;

        // ✅ Detectar si está en móvil (Android o iOS)
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        // ✅ Crear URL completa del pago
        const pagoURL = `${url}?token_ws=${token}`;

        if (isMobile) {
          // 📱 Abre en el navegador externo del sistema
          console.log('📱 Abriendo Webpay en navegador externo...');
          window.open(pagoURL, '_system');
        } else {
          // 💻 En escritorio, usa el método POST tradicional
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = url;

          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = 'token_ws';
          input.value = token;
          form.appendChild(input);

          document.body.appendChild(form);
          form.submit();
        }
      } else {
        console.error('❌ Error en la respuesta:', result);
        alert('No se pudo procesar el pago.');
      }
    } catch (err) {
      console.error(err);
      alert('Error inesperado al procesar el pago.');
    }
  }

  volver() {
    this.router.navigate(['/reserview']);
  }
}
