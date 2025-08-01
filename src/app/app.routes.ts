import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pagina-inicial/pagina-inicial.page').then(p => p.PaginaInicialPage),
  },
  {
    path: 'gerador',
    loadComponent: () => import('./pages/gerador/gerador.page').then(p => p.GeradorPage),
  },
  {
    path: 'gerador-alfanumerico',
    loadComponent: () =>
      import('./pages/gerador-alfanumerico/gerador-alfanumerico.page').then(p => p.GeradorAlfanumericoPage),
  },
  {
    path: 'validador',
    loadComponent: () => import('./pages/validador/validador.page').then(p => p.ValidadorPage),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
