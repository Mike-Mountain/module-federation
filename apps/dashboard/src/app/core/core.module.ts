import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { LandingComponent } from './components/landing/landing.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    TopNavigationComponent,
    SideNavigationComponent,
    BottomNavigationComponent,
    LandingComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingComponent,
    LayoutComponent
  ]
})
export class CoreModule {
}
