import { Routes } from '@angular/router';
import {Home} from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Quando a URL for vazia (http://localhost:4200/), redireciona para 'nova-pagina'
  { path: 'home', component: Home }, // Esta é a rota que carrega seu novo componente
  // Rota para o componente Home
  // Se você tiver outras páginas, adicione as rotas aqui:
  // { path: 'contato', component: ContatoComponent },
  // { path: 'sobre', component: SobreComponent },

  // Opcional: Uma rota curinga para lidar com URLs não encontradas
  { path: '**', redirectTo: 'home' }
];
