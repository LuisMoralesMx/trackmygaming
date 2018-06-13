import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component'
import { GamesAddComponent } from './components/games-add/games-add.component'
import { GamesViewDetailComponent } from './components/games-view-detail/games-view-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'gameslist', component: GamesListComponent },
  { path: 'gamesadd', component: GamesAddComponent },
  { path: 'gamesview/:id', component: GamesViewDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
