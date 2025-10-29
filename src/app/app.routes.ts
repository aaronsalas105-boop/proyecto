import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  
  // Rutas públicas (sin autenticación requerida)
  {path: 'main', loadComponent: () => import('./main/main.page').then((m) => m.MainPage)},
  
  // Rutas de invitados (solo accesibles si NO hay usuario autenticado)
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage),
    canActivate: [GuestGuard]
  },
  {
    path: 'restablecer',
    loadComponent: () => import('./pages/restablecer/restablecer.page').then( m => m.RestablecerPage),
    canActivate: [GuestGuard]
  },
  
  // Rutas privadas (requieren autenticación)
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'rewards',
    loadComponent: () => import('./pages/rewards/rewards.page').then( m => m.RewardsPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'food',
    loadComponent: () => import('./pages/food/food.page').then( m => m.FoodPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.page').then( m => m.GamesPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/new/new.page').then( m => m.NewPage),
    canActivate:[]
  },
  {
    path: 'reserview',
    loadComponent: () => import('./pages/reserview/reserview.page').then( m => m.ReserviewPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'juego1',
    loadComponent: () => import('./pages/juego1/juego1.page').then( m => m.Juego1Page),
    canActivate: [AuthGuard]
  },
  {
    path: 'juego2',
    loadComponent: () => import('./pages/juego2/juego2.page').then( m => m.Juego2Page),
    canActivate: [AuthGuard]
  },
  {
    path: 'veranfitrion',
    loadComponent: () => import('./pages/veranfitrion/veranfitrion.page').then( m => m.VerAnfitrionPage),
    canActivate: [AuthGuard]
  },
  
  // Rutas de formularios (requieren autenticación)
  {
    path: 'formulariouno',
    loadComponent: () => import('./formulariouno/formulariouno.page').then( m => m.FormulariounoPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'formulariodos',
    loadComponent: () => import('./pages/formulariodos/formulariodos.page').then( m => m.FormulariodosPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'formulariotres',
    loadComponent: () => import('./pages/formulariotres/formulariotres.page').then( m => m.FormulariotresPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'formulariocuatro',
    loadComponent: () => import('./pages/formulariocuatro/formulariocuatro.page').then( m => m.FormulariocuatroPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'formulariocinco',
    loadComponent: () => import('./pages/formulariocinco/formulariocinco.page').then( m => m.FormulariocincoPage),
    canActivate: [AuthGuard]
  },
  
  // Ruta legacy (mantener por compatibilidad)
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'voucher/:id',
    loadComponent: () => import('./pages/voucher/voucher.page').then(m => m.VoucherPage),
    canActivate: [AuthGuard]
  }
];


