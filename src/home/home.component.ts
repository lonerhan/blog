import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: any;
  constructor(
    private _homeService: HomeService,
    private _router: Router,
    private _Location: Location
  ) {
    this.list = [];
  }

  ngOnInit() {
    this.getlist()
  }
  public getlist(): void {
    this._homeService.getArticle({
  
    }).subscribe(result => {
      this.list= result;
      console.log(this.list);

    })
    }

}