import { NgModule } from '@angular/core';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageSingleProjectComponent } from "./page-single-project/page-single-project.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PageLandingComponent
  },
  {
    path: 'projects',
    component: PageLandingComponent
  },
  {
    path: 'articles',
    component: PageLandingComponent
  },
  {
    path: 'singleproject/:id',
    component: PageSingleProjectComponent
  }
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