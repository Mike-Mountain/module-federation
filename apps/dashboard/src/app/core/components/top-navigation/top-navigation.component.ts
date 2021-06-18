import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Observable} from "rxjs";

@Component({
  selector: 'dash-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @Input() drawer: MatDrawer | undefined;
  @Input() isHandset$: Observable<boolean> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
