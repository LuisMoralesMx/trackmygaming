import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'Game Tracking';

  /*items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/Games/R6vBhRITlaMF6aVDK4oUF3wXHXI3').valueChanges();
  }*/
}
