import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameListComponent } from './components/game-list/game-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent, children: [
    {path: ':id', component: GameListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
