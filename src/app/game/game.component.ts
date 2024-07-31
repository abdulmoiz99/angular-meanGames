import { Component, OnInit } from '@angular/core';
import { Game } from '../games/games.component';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  game!: Game;

  constructor(private _activatedRoute: ActivatedRoute, private _gameService: GameDataService) {
  }

  ngOnInit(): void {
    const gameId: String = "5fbed15c07a5894b456a4336"
    // this._gameService.getGame(gameId).subscribe(game => {
    //   this.game = game;
    // })
  }


}
