import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLandingComponent } from './page-landing/page-landing.component';

import { AppRoutingModule } from "./app-routing.module";
import { ProjectCardComponent } from './project-card/project-card.component';
import { PageSingleProjectComponent } from './page-single-project/page-single-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLandingComponent,
    ProjectCardComponent,
    PageSingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
