import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NavNavbarComponent } from './nav-navbar/nav-navbar.component';
import { MonCarouselComponent } from './mon-carousel/mon-carousel.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    NavNavbarComponent,
    MonCarouselComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
