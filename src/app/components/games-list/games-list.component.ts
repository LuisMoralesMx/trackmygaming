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
    let game = new Game();
    let reference = this.gamesService.getGameDetails(key);

    reference.once("value")
      .then(function (snapshot) {
        game.platform = snapshot.child("platform").val();
        game.publisher = snapshot.child("publisher").val();
        game.releasedate = snapshot.child("releasedate").val();
        game.status = snapshot.child("status").val();
        game.title = snapshot.child("title").val();
    });

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