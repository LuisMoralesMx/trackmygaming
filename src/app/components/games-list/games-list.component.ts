import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  // Declaring component variables
  platform = 'PS4';
  gamesList: Array<Game>;

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    this.gamesList = this.gamesService.getGameListByUserId();
  }

  viewGameDetail() {
    alert('Not coded yet.');
  }

}
