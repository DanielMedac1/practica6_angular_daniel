import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { Botonrecarga } from '../recargarboton/recargarboton.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, Botonrecarga],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
isLoggedIn = false;
favGame="";
getFavGame(gameName:string){
  alert("Se ha añadido a favorito el color "+gameName)
  this.favGame=gameName;
}
greet(){
  alert("Hola!")
}
}

