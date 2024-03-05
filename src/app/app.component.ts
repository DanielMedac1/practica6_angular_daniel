import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombreUsuario: string = '';
  mostrarFormulario: boolean = true;

  constructor(private router: Router) {}

  onSubmit() {
    const nombreInput = (document.getElementById('nombre') as HTMLInputElement).value;
    if (nombreInput) {
      this.nombreUsuario = nombreInput;
      this.mostrarFormulario = false;
    }
  }

  
}