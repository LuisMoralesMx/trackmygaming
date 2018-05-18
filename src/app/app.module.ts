import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesAddComponent } from './components/games-add/games-add.component';
import { GamesService } from './services/games.service';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule, // imports firebase/db, only needed for database features
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
