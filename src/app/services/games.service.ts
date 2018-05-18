import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Game } from '../models/game.model';
import { Platform } from '../models/platform.model'

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private db: AngularFireDatabase) { }

  getGameListByUserId(): Observable<Game[]>{
    return this.db.list<Game>('/Games/R6vBhRITlaMF6aVDK4oUF3wXHXI3').valueChanges();
  }

  addNewGame(game: Game) {
    return this.db.list('/Games/R6vBhRITlaMF6aVDK4oUF3wXHXI3').push(game);
  }

  getPlatformOptions() {
    type platforms = Array<Platform>
    const arr: platforms = [
      {name: 'PS4', code: 0},
      {name: 'Nintendo', code: 1},
      {name: 'XBOX', code: 2},
      {name: 'PC', code: 2},
    ];

    return arr;
  }
}