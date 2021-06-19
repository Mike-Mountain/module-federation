import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LandingComponent} from "./core/components/landing/landing.component";

const routes: Route[] = [
  {path: '', component: LandingComponent},
  {path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
