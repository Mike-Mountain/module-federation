import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LandingComponent} from "./core/components/landing/landing.component";
import {loadRemoteModule} from "@angular-architects/module-federation";

const routes: Route[] = [
  {path: 'landing', component: LandingComponent},
  {
    path: 'media',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteName: 'ChildAppOne',
        exposedModule: './Module'
      }).then(m => m.AppModule)
  },
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
