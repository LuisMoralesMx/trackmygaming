import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { Observable } from 'rxjs';

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

  viewGameDetail(key) {
    alert('Key: ' + key);
  }

  getDateFormat(milliseconds : string) {
    let date = moment(milliseconds).format("MMM Do YY");
    return date;
  }

}
