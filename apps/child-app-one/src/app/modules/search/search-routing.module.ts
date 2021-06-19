import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

const routes: Routes = [
  {
    path: '',
    component: SearchContainerComponent,
    children: [
      { path: 'results/:searchType/:searchValue', component: SearchResultsComponent },
      { path: 'details/:searchValue', component: SearchDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}
