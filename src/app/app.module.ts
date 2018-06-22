import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesAddComponent } from './components/games-add/games-add.component';
import { GamesService } from './services/games.service';
import { UtilsService } from './services/utils.service'

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { GamesUpdateDetailComponent } from './components/games-update-detail/games-update-detail.component';
import { GamesWelcomeComponent } from './components/games-welcome/games-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesAddComponent,
    GamesUpdateDetailComponent,
    GamesWelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule, // imports firebase/db, only needed for database features
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [GamesService, UtilsService, MatDatepickerModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
