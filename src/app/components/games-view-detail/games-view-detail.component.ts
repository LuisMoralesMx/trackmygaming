import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UtilsService } from '../../services/utils.service'
import { Platform } from '../../models/platform.model';
import { Status } from '../../models/status.model';

@Component({
  selector: 'app-games-view-detail',
  templateUrl: './games-view-detail.component.html',
  styleUrls: ['./games-view-detail.component.scss']
})
export class GamesViewDetailComponent implements OnInit {

  private id: string;
  private paramRouting: any;
  
  public gameDetails: Game;
  public platformsOptions: Platform[];
  public statusOptions: Status[];

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.paramRouting = this.route.params.subscribe(params => {
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
    let data = from(this.gamesService.getGameDetails(gameKey));

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
    alert(JSON.stringify(this.gameDetails));
  }

  getPlatformsOptions() {
    return this.platformsOptions = this.gamesService.getPlatformOptions();
  }

  getStatusOptions() {
    return  this.statusOptions = this.gamesService.getStatusOptions();
  }
}