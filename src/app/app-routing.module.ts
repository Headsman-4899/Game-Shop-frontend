import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
<<<<<<< HEAD
=======
import { AdminComponent } from './pages/admin/admin.component';
>>>>>>> 960f014a3a076fdab53b5c7c7a71890893a1ed9b


const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent, children: [
    {path: ':id', component: GameListComponent}
  ]},
  {path: 'games/:id', component: GameDetailComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'signup', component: SignupComponent}
=======
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent},
>>>>>>> 960f014a3a076fdab53b5c7c7a71890893a1ed9b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
