import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  // Declaring component variables
  platform = 'PS4';
  gamesList = Array<{id: number, title: string, platform: string, releasedate: string}>();

  constructor() { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    
   this.gamesList = [
      {id: 1, title: 'Last Of Us', platform: 'PS4', releasedate: 'July 29, 2014'},
      {id: 2, title: 'God of War', platform: 'PS4', releasedate: 'April 20, 2018'},
      {id: 3, title: 'Horizon Zero Dawn', platform: 'PS4', releasedate: 'February 28, 2017'},
      {id: 4, title: 'Uncharted 4: A Thief\'s End', platform: 'PS4', releasedate: 'May 10, 2016'}      
    ];
  }

  viewGameDetail() {
    alert('Not coded yet.');
  }

}
