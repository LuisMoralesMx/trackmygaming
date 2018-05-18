import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-games-add',
  templateUrl: './games-add.component.html',
  styleUrls: ['./games-add.component.scss']
})
export class GamesAddComponent implements OnInit {

  constructor(
    private gamesService: GamesService,
  ) { }

  ngOnInit() {
  }

  game = new Game("","","","","");
  platform = new Array("PlayStation", "Nintendo", "Xbox")

  addNewGame() {
    return this.gamesService.addNewGame(this.game);
  }

}
