import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UtilsService } from '../../services/utils.service'
import { AuthService } from '../../services/auth.service';
import { Platform } from '../../models/platform.model';
import { Status } from '../../models/status.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-games-update-detail',
  templateUrl: './games-update-detail.component.html',
  styleUrls: ['./games-update-detail.component.scss']
})
export class GamesUpdateDetailComponent implements OnInit {

  private id: string;
  private paramRouting: any;
  
  public gameDetails: Game = new Game();
  public platformsOptions: Platform[];
  public statusOptions: Status[];

  public updateSuccess: boolean = false;
  public disableUpdateButton: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private utilsService: UtilsService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.paramRouting = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.viewGameDetail(this.id);
      this.getPlatformsOptions();
      this.getStatusOptions();
    })
  }

  ngOnDestroy() {
    this.paramRouting.unsubscribe();
  }

  viewGameDetail(gameKey: string) {
    let game = new Game();
    let userId = this.authService.userCredentials.id;
    let data = from(this.gamesService.getGameDetails(gameKey, userId));

    data.subscribe(response => {
      game.platform = response.child("platform").val();
      game.publisher = response.child("publisher").val();
      game.releasedate = this.utilsService.getDateFormat(response.child("releasedate").val());
      game.releasedateObject = new Date(response.child("releasedate").val());
      game.status = response.child("status").val();
      game.title = response.child("title").val();

      this.gameDetails = game;
    })
  }

  updateGameDetails() {
    let userId = this.authService.userCredentials.id;
    let update = from(this.gamesService.updateGameDetails(this.id, this.gameDetails, userId));

    update.subscribe(() => {
      this.updateSuccess = true;
      this.disableUpdateButton = true;

      setTimeout(() => {
        this.router.navigate(['/gameslist']);
      }, environment.appSettings.redirectDelay)
    });
  }

  getPlatformsOptions() {
    return this.platformsOptions = this.gamesService.getPlatformOptions();
  }

  getStatusOptions() {
    return  this.statusOptions = this.gamesService.getStatusOptions();
  }
}
