import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable()
export class GamesService {

  constructor() { }

  getGameListByUserId = function()  {
    
    let gamesList = [
      {id: 1, title: 'Last Of Us', platform: 'PS4', releasedate: 'July 29, 2014', status: 'Completed'},
      {id: 2, title: 'God of War', platform: 'PS4', releasedate: 'April 20, 2018', status: 'In Progress'},
      {id: 3, title: 'Horizon Zero Dawn', platform: 'PS4', releasedate: 'February 28, 2017', status: 'Completed'},
      {id: 4, title: 'Uncharted 4: The Lost Legacy', platform: 'PS4', releasedate: 'May 10, 2016', status: 'Completed'}      
    ];

    return gamesList;
    
  }
}
