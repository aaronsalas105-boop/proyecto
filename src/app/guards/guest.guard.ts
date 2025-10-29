import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Guard que protege rutas de invitados - evita acceso si ya hay usuario autenticado
 * Si hay usuario autenticado, redirige al menú principal
 */
export const GuestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  // Verificar si ya hay usuario autenticado usando el signal
  if (auth.user()) {
    console.log('🚫 GuestGuard: Usuario ya autenticado, redirigiendo a menú');
    router.navigate(['/menu']);
    return false;
  }
  
  console.log('✅ GuestGuard: Usuario no autenticado, acceso permitido');
  return true;
};

