import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model'
import { Platform } from '../../models/platform.model'
import { GamesService } from '../../services/games.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-games-add',
  templateUrl: './games-add.component.html',
  styleUrls: ['./games-add.component.scss']
})
export class GamesAddComponent implements OnInit {

  platforms: Platform[];
  game: Game = new Game();  

  constructor(
    private gamesService: GamesService,    
    
  ) { }

  ngOnInit() {
    this.getPlatforms();
  }

  addNewGame() {
    return this.gamesService.addNewGame(this.game);
  }

  getPlatforms() {
    return this.platforms = this.gamesService.getPlatformOptions();
  }
}

