import { Component } from '@angular/core';
@Component({
  selector: 'app-recargar',
  standalone: true,
  imports: [],
  template: `
  <button (click)="reloadPage()" class="reload-button">Recargar página</button>

  `,
  styles: `
  .reload-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
  `
})
export class Botonrecarga {

  reloadPage() {
    window.location.reload();
  }
}
