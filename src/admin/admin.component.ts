import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public list: any;
  public deletModal: boolean;
  public id: string;
  public articleTitle: string;
  constructor(
    private _homeService: HomeService,
    private _router: Router,
    private _Location: Location
  ) {
    this.list = [];
    this.deletModal = false;
  }


  ngOnInit() {
    this.getlist()
  }
  public getlist(): void {
    this._homeService.getArticle({

    }).subscribe(result => {
      this.list = result;
      console.log(this.list);

    })
  }
  public deleteArticleModal(id,title): void {
    this.id = id;
    this.articleTitle=title
    this.deletModal = true;
  }
   public showArticleModal(id): void {
    this.deletModal = false;
  }
   public deleteArticle(id): void {
     this._homeService.deleteArticle({
      id: this.id
    }).subscribe(result => {
      if(result.status==1){
        this.deletModal = false;
        this.getlist();
      }
    })
  }

}
