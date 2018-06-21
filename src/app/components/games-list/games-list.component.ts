import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UtilsService } from '../../services/utils.service'

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  // Declaring component variables
  gamesList: Game[];

  constructor(
    private router : Router,
    private gamesService: GamesService,
    private utilsService: UtilsService // Used directly in the HTML.
  ) { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    this.gamesService.getGameListAndKeyByUserId().subscribe(games => this.gamesList = games);
  }

  updateGameDetails(id: string) {
    this.router.navigate(['/gamesupdate', id]);
  }

  deleteGame(key: string) {
    this.gamesService.deleteGame(key).then(function(response) {
      // Implement behavior.
    });
  }
}