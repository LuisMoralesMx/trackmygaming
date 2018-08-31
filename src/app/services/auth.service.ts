import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userCredentials: User = new User();
  authState: any = null;

  constructor(private fireBaseAuth: AngularFireAuth) { 
    this.authState = fireBaseAuth.authState;
  }

  doGoogleLogIn(): void {
    this.fireBaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        this.userCredentials.id = response.additionalUserInfo.profile.id;
        this.userCredentials.email = response.additionalUserInfo.profile.email;
        this.userCredentials.firstName = response.additionalUserInfo.profile.given_name;
        this.userCredentials.lastName = response.additionalUserInfo.profile.family_name;
        this.userCredentials.gender = response.additionalUserInfo.profile.gender;
      })
      .catch(error => {
        console.log('Oops! Something went wrong!', error.message);
      })      
  }

  doLogOut() {
    this.fireBaseAuth.auth.signOut();
  }
}
