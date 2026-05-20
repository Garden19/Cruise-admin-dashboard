import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showNavbar = false;

  onActivate(component: unknown) {
    this.showNavbar = !(component instanceof Login) && !(component instanceof NotFound);
  }
}
