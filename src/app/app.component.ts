import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Tracking';
  isLogIn: boolean = false;
  displayName: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(
      (user) => {
        if (user) {
          this.displayName = user.displayName;
          this.isLogIn = true;
          this.router.navigate(["/gameswelcome"]);
        }
      },
      (error) => {
        console.log('An exception has ocurred. ' + error);
      })
  }

  doSignIn() {
    let signIn = from(this.authService.doGoogleLogIn());
    signIn.subscribe(() => {
      this.isLogIn = true;
      this.router.navigate([""]);
    });
  }

  doSignOut() {
    let signOut = from(this.authService.doGoogleLogOut());
    signOut.subscribe(() => {
      this.isLogIn = false;
      this.router.navigate([""]);
    });
  }
}
