import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'Game Tracking';
  isLogIn: boolean = false;

  constructor(private authService: AuthService, private router: Router,) { }

  ngOnInit() { 
    this.authService.authState.subscribe((user) => {
      if(user.uid) {
        this.router.navigate(["/gameswelcome"]);
        this.isLogIn = true;
      }
    })
  }

  doSignIn() {    
    this.authService.doGoogleLogIn();    
  }
}
