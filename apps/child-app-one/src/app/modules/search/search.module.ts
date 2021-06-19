import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchDetailsComponent} from './components/search-details/search-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import { SearchContainerComponent } from './components/search-container/search-container.component';


@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchDetailsComponent,
    SearchContainerComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDividerModule
  ]
})
export class SearchModule {
}
