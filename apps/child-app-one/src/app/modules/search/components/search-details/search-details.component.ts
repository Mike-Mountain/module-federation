import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Observable} from "rxjs";
import {SearchResult} from "../../models/search-result.model";

@Component({
  selector: 'dash-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  searchDetails: Observable<SearchResult | undefined> | undefined

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchDetails = this.searchService.getSelectedSearchResult();
  }

}
