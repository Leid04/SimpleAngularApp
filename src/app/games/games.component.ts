import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h1>Los juegos favoritos de {{username}}</h1>
    <ul>
      @for (game of games; track game.id) {<!--Track para identificadores unicos-->
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = ''; // o tambien @Input() username: string; 

  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string){ this.addFavoriteEvent.emit(gameName); }

  games = [
    { id: 1, name: 'Uncharted 4' },
    { id: 2, name: 'Fortnite' },
    { id: 3, name: 'CSGO' },
  ]
}
