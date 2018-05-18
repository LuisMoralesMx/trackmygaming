import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model'
import { Platform } from '../../models/platform.model'
import { GamesService } from '../../services/games.service'
import { stringify } from 'querystring';
import { Status } from '../../models/status.model';

@Component({
  selector: 'app-games-add',
  templateUrl: './games-add.component.html',
  styleUrls: ['./games-add.component.scss']
})
export class GamesAddComponent implements OnInit {

  platformsOptions: Platform[];
  statusOptions: Status[];
  game: Game = new Game();  

  constructor(
    private gamesService: GamesService,    
    
  ) { }

  ngOnInit() {
    this.getPlatformsOptions();
    this.getStatusOptions();
  }

  addNewGame() {
    return this.gamesService.addNewGame(this.game);
  }

  getPlatformsOptions() {
    return this.platformsOptions = this.gamesService.getPlatformOptions();
  }

  getStatusOptions() {
    return  this.statusOptions = this.gamesService.getStatusOptions();
  }
}

