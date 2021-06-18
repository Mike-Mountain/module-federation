import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LandingComponent} from "./core/components/landing/landing.component";

const routes: Route[] = [
  {path: 'landing', component: LandingComponent},
  {path: '', pathMatch: 'full', redirectTo: 'landing'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
