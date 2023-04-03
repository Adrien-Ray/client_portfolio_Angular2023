import { NgModule } from '@angular/core';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PageLandingComponent
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