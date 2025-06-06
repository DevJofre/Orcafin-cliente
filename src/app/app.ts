import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { LoginComponent } from "./components/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Orcafin-cliente';
}
