import { Component, Output, Input, EventEmitter } from '@angular/core';

/* import { Input } from '@angular/core'; */

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <p>¿Cuál es tu color favorito?</p>
    <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">
      {{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav (gameName:string){
    /* alert("Has hecho click en  "+gameName); */
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Rojo'
    },
    {
      id: 2,
      name: 'Verde'
    },
    {
      id: 3,
      name: 'Negro'
    }
  ]
}
