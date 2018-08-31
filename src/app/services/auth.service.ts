import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userCredentials: User = new User();
  authState: Observable<any> = null;

  constructor(
    private fireBaseAuth: AngularFireAuth,    
  ) { 
    this.authState = fireBaseAuth.authState;
    this.authState.subscribe((response) => {
        this.userCredentials.id = response.uid;
        this.userCredentials.email = response.email;
        this.userCredentials.fullName = response.displayName;   
    })
  }

  doGoogleLogIn(): void {
    this.fireBaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())    
      .catch(error => {
        console.log('Oops! Something went wrong!', error.message);
      })      
  }

  doLogOut() {
    this.fireBaseAuth.auth.signOut();
  }
}
