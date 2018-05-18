import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Game } from '../models/game.model';

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
}
