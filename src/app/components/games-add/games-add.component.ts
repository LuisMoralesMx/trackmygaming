import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model'
import { Platform } from '../../models/platform.model'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-games-add',
  templateUrl: './games-add.component.html',
  styleUrls: ['./games-add.component.scss']
})
export class GamesAddComponent implements OnInit {

  platform: Platform[];
  selectedPlatform: Platform;
  game = new Game("","","","","");  

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
    return this.platform = [
      {name: 'PS4', code: 0},
      {name: 'Nintendo', code: 1},
      {name: 'XBOX', code: 2},
    ];
  }
}

