import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {NavComponent} from './navigation/nav.component';
import {HeaderComponent} from './header/header.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PortfolioMainComponent} from './portfolio/portfolio-main.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail.component';
import {VisionComponent} from './vision/vision.component';
import {SocialsComponent} from './socials/socials.component';
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PortfolioComponent,
    PortfolioMainComponent,
    PortfolioDetailComponent,
    VisionComponent,
    SocialsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
