import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { Home } from './components/home/home';
import { LoginComponent } from "./components/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Home, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Orcafin-cliente';
}
