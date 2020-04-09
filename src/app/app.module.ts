import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoryComponent } from './components/category/category.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryComponent,
    GameListComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
