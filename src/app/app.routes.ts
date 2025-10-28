import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: 'main', loadComponent: () => import('./main/main.page').then((m) => m.MainPage)},
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage)
  },
  {
    path: 'rewards',
    loadComponent: () => import('./pages/rewards/rewards.page').then( m => m.RewardsPage)
  },
  {
    path: 'food',
    loadComponent: () => import('./pages/food/food.page').then( m => m.FoodPage)
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.page').then( m => m.GamesPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'formulariouno',
    loadComponent: () => import('./formulariouno/formulariouno.page').then( m => m.FormulariounoPage)
  },
  {
    path: 'formulariodos',
    loadComponent: () => import('./pages/formulariodos/formulariodos.page').then( m => m.FormulariodosPage)
  },
  {
    path: 'formulariotres',
    loadComponent: () => import('./pages/formulariotres/formulariotres.page').then( m => m.FormulariotresPage)
  },
  {
    path: 'formulariotres',
    loadComponent: () => import('./pages/formulariotres/formulariotres.page').then(m => m.FormulariotresPage)
  },
  {
    path: 'formulariocuatro',
    loadComponent: () => import('./pages/formulariocuatro/formulariocuatro.page').then( m => m.FormulariocuatroPage)
  },
  {
    path: 'formulariocuatro',
    loadComponent: () =>import('./pages/formulariocuatro/formulariocuatro.page').then((m) => m.FormulariocuatroPage
      ),
  },
  {
    path: 'formulariocinco',
    loadComponent: () => import('./pages/formulariocinco/formulariocinco.page').then( m => m.FormulariocincoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'restablecer',
    loadComponent: () => import('./pages/restablecer/restablecer.page').then( m => m.RestablecerPage)
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/new/new.page').then( m => m.NewPage)
  },
  {
    path: 'reserview',
    loadComponent: () => import('./pages/reserview/reserview.page').then( m => m.ReserviewPage)
  },
  {
    path: 'juego1',
    loadComponent: () => import('./pages/juego1/juego1.page').then( m => m.Juego1Page)
  },
  {
    path: 'juego2',
    loadComponent: () => import('./pages/juego2/juego2.page').then( m => m.Juego2Page)
  },
  {
    path: 'veranfitrion',
    loadComponent: () => import('./pages/veranfitrion/veranfitrion.page').then( m => m.VerAnfitrionPage)
  },

];


