import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'child-one-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  showInput = false;
  searchType: string | undefined;
  searchValue: string | undefined;

  public functions = [
    {text:'Search for a movie', searchType: 'movie'},
    {text:'Search for a series', searchType: 'series'},
    {text:'Search for an episode', searchType: 'episode'},
    {text:'Search for a game', searchType: 'game'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showSearchInput(searchType: string) {
    this.showInput = true;
    this.searchType = searchType;
  }

  search(searchValue: string | undefined) {
    this.router.navigateByUrl(`search/results/${this.searchType}/${searchValue}`)
  }
}
