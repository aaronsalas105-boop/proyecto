import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Guard que protege rutas privadas - solo permite acceso si hay usuario autenticado
 * Si no hay usuario, redirige al login
 */
export const AuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  // Verificar si hay usuario autenticado usando el signal
  if (!auth.user()) {
    console.log('🔒 AuthGuard: Usuario no autenticado, redirigiendo a login');
    router.navigate(['/login']);
    return false;
  }
  
  console.log('✅ AuthGuard: Usuario autenticado, acceso permitido');
  return true;
};

