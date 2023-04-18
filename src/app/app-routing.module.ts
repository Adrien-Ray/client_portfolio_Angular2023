import { NgModule } from '@angular/core';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageSingleProjectComponent } from "./page-single-project/page-single-project.component";
import { RouterModule, Routes } from "@angular/router";
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { PageSingleArticleComponent } from './page-single-article/page-single-article.component';
import { PageContactComponent } from './page-contact/page-contact.component';

const routes: Routes = [
  {
    path: '',
    component: PageLandingComponent
  },
  {
    path: 'projects',
    component: PageProjectsComponent
  },
  {
    path: 'articles',
    component: PageArticlesComponent
  },
  {
    path: 'singleproject/:id',
    component: PageSingleProjectComponent
  },
  {
    path: 'singlearticle/:id',
    component: PageSingleArticleComponent
  },
  {
    path: 'contact',
    component: PageContactComponent
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {}