import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatMenuModule,
    MatRippleModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  abrirConta(): void {
    console.log('Item "Conta" clicado');
  }

  abrirConfiguracoesApp(): void {
    console.log('Item "Configuração" clicado');
  }

  fazerLogout(): void {
    console.log('Item "Sair" clicado');
  }

  minimizarTela(): void {
    if ((window as any).api) {
      (window as any).api.send('minimize-window');
    } else {
      console.warn(
        'Funcionalidade de minimizar só está disponível na versão desktop.',
      );
    }
  }
}
