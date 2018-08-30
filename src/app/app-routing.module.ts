import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component'
import { GamesAddComponent } from './components/games-add/games-add.component'
import { GamesUpdateDetailComponent } from './components/games-update-detail/games-update-detail.component';
import { GamesWelcomeComponent } from './components/games-welcome/games-welcome.component'

const routes: Routes = [
  { path: '', redirectTo: 'gameswelcome', pathMatch: 'full' },
  { path: 'gameslist', component: GamesListComponent },
  { path: 'gamesadd', component: GamesAddComponent },
  { path: 'gamesupdate/:id', component: GamesUpdateDetailComponent },
  { path: 'gameswelcome', component: GamesWelcomeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }