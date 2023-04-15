import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLandingComponent } from './page-landing/page-landing.component';

import { AppRoutingModule } from "./app-routing.module";
import { ProjectCardComponent } from './project-card/project-card.component';
import { PageSingleProjectComponent } from './page-single-project/page-single-project.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLandingComponent,
    ProjectCardComponent,
    PageSingleProjectComponent,
    PageProjectsComponent,
    PageArticlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }