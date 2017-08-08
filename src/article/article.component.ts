import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from './article.service';
import * as MarkdownIt from 'markdown-it';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public article: any;
  public id: string;
  public title: string;
  public abstract: string;
  public content: string;
  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _Location: Location
  ) {
    this.article = [];
    this.id = this._Location.path().split('/')[2];
  }

  ngOnInit() {
    this.getDetail()
  }
  public getDetail(): void {
    this._articleService.getArticleDetail({
      id: this.id
    }).subscribe(result => {
      this.article = result;
      this.title = this.article[0].title;
      this.abstract = this.article[0].abstract;
      var md = new MarkdownIt({
        html: true //启用html标记转换
      });
      this.content = md.render(this.article[0].content);
    })
  }
}