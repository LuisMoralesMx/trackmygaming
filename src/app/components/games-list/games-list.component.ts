import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UtilsService } from '../../services/utils.service'
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  // Declaring component variables
  gamesList: Game[];

  public deleteSuccess: boolean = false;

  constructor(
    private router: Router,
    private gamesService: GamesService,
    private authService: AuthService,
    private utilsService: UtilsService // Used directly in the HTML.
  ) { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    let userId = this.authService.userCredentials.id;

    if (userId) {
      this.gamesService.getGameListAndKeyByUserId(userId).subscribe(games => this.gamesList = games);
    }
  }

  updateGameDetails(id: string) {
    this.router.navigate(['/gamesupdate', id]);
  }

  deleteGame(gameKey: string) {
    let userId = this.authService.userCredentials.id;
    let del = from(this.gamesService.deleteGame(gameKey, userId));

    del.subscribe(() => {
      this.deleteSuccess = true;

      setTimeout(() => {
        this.deleteSuccess = false;
      }, environment.appSettings.redirectDelay);

    })
  }
}
