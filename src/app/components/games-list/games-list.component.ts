import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'

import * as moment from 'moment';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  // Declaring component variables
  gamesList: Game[];

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    this.gamesService.getGameListAndKeyByUserId().subscribe(games => this.gamesList = games);
  }

  viewGameDetail(key: string) {
    alert('Key: ' + key);
  }

  deleteGame(key: string) {
    this.gamesService.deleteGame(key).then(function(response) {
      // Implement behavior.  
    });
  }

  getDateFormat(milliseconds : string) {
    let date = moment(milliseconds).format("MMM Do YY");
    return date;
  }

}