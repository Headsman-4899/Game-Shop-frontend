import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoryComponent } from './components/category/category.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { SignupComponent } from './pages/signup/signup.component'
=======
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component'
>>>>>>> 960f014a3a076fdab53b5c7c7a71890893a1ed9b

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryComponent,
    GameListComponent,
    GameDetailComponent,
    LoginComponent,
<<<<<<< HEAD
    SignupComponent
=======
    SignupComponent,
    AdminComponent
>>>>>>> 960f014a3a076fdab53b5c7c7a71890893a1ed9b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
