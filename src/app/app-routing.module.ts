import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component'
import { GamesAddComponent } from './components/games-add/games-add.component'
import { GamesUpdateDetailComponent } from './components/games-update-detail/games-update-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'gameslist', component: GamesListComponent },
  { path: 'gamesadd', component: GamesAddComponent },
  { path: 'gamesupdate/:id', component: GamesUpdateDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }