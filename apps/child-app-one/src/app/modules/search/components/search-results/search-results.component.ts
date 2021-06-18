import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {filter, takeUntil, tap} from "rxjs/operators";
import {Observable, ReplaySubject} from "rxjs";
import {SearchResult, SearchType} from "../../models/search-result.model";

@Component({
  selector: 'dash-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  data: SearchResult[] = [];
  destroyed$ = new ReplaySubject<boolean>(1);
  searchType: SearchType | undefined;
  searchValue: string | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        this.searchType = params.searchType;
        this.searchValue = params.searchValue;
        this.searchService.getAll(params.searchType)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(data => {
            this.data = data.filter(item => item.title.includes(params.searchValue));
          });
      })
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  search(searchValue: string | undefined) {
    this.router.navigateByUrl(`search/results/${this.searchType}/${searchValue}`)
  }

  navigateToDetails(result: SearchResult) {
    this.searchService.setSelectedSearchResult(result);
    this.router.navigateByUrl(`search/details/${result.title}`)
  }
}
