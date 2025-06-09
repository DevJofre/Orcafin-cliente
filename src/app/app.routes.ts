import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },

  // Rota para o componente Home
  // Se você tiver outras páginas, adicione as rotas aqui:
  // { path: 'contato', component: ContatoComponent },
  // { path: 'sobre', component: SobreComponent },

  // Opcional: Uma rota curinga para lidar com URLs não encontradas
  { path: '**', redirectTo: 'home' },
];
