import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';


@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchDetailsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
