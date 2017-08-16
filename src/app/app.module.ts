import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PortfolioMainComponent} from './portfolio/portfolio-main.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail.component';
import {GalleryComponent} from './portfolio/gallery.component';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    PortfolioMainComponent,
    PortfolioDetailComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
