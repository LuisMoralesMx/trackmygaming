import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-games-view-detail',
  templateUrl: './games-view-detail.component.html',
  styleUrls: ['./games-view-detail.component.scss']
})
export class GamesViewDetailComponent implements OnInit {

  private id: string;
  private sub: any;
  
  gameDetails: Game;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.viewGameDetail(this.id);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  viewGameDetail(gameKey: string) {
    let game = new Game();
    let data = from(this.gamesService.getGameDetails(gameKey));

    data.subscribe({
      next(response) {
        game.platform = response.child("platform").val();
        game.publisher = response.child("publisher").val();
        game.releasedate = response.child("releasedate").val();
        game.status = response.child("status").val();
        game.title = response.child("title").val();
      }
    })
  }
}