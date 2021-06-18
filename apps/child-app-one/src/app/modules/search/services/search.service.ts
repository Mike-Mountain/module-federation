import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchResult, SearchType} from "../models/search-result.model";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedSearchResult = new BehaviorSubject<SearchResult | undefined>(undefined);

  constructor(private http: HttpClient) {
  }

  setUrl(searchType: SearchType, searchValue?: string): string {
    let url = `${environment.apiUrl}/mock-`;
    switch (searchType) {
      case "movie":
        url += `movies.json`;
        break;
      case "series":
        url += `series.json`;
        break;
      case "game":
        url += `games.json`;
        break;
    }
    if (searchValue) {
      url += `/${searchValue}`;
    }
    return url;
  }

  getAll(searchType: SearchType): Observable<SearchResult[]> {
    const url = this.setUrl(searchType);
    return this.http.get<SearchResult[]>(url);
  }

  setSelectedSearchResult(result: SearchResult) {
    this.selectedSearchResult.next(result);
  }

  getSelectedSearchResult(): Observable<SearchResult | undefined> {
    return this.selectedSearchResult.asObservable();
  }
}
