import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html',
  styleUrls: ['./voucher.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class VoucherPage implements OnInit {
  pedido: any = null;
  codigo: string = '';

  constructor(
    private supabase: SupabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const pedidoId = this.route.snapshot.paramMap.get('id');
    if (!pedidoId) {
      this.router.navigate(['/menu']);
      return;
    }

    try {
      const { data, error } = await this.supabase.client
        .from('pedidos')
        .select('*')
        .eq('id', pedidoId)
        .single();

      if (error) throw error;

      this.pedido = data;
      // Generar código voucher tipo CEC-XXXXXX
      this.codigo = 'CEC-' + Math.floor(100000 + Math.random() * 900000).toString();
    } catch (err) {
      console.error('Error al cargar pedido:', err);
      this.router.navigate(['/menu']);
    }
  }

  volverAlMenu() {
    this.router.navigate(['/menu']);
  }
}
