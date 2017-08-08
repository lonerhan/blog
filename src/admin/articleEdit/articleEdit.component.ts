import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ArticleService } from '../../article/article.service';
import { ArticleEditService } from './articleEdit.service';
import { Router, ActivatedRoute, Params }                         from '@angular/router';
@Component({
  selector: 'app-articleEdit',
  templateUrl: './articleEdit.component.html',
  styleUrls: ['./articleEdit.component.css']
})
export class ArticleEditComponent implements OnInit {
  public id: string;
  public isAdd: boolean;
  public title: string;
  public article = {
    title: '',
    abstract: '',
    content: ''
  };
  private _ckConfig: any = {                            // ckeditor 配置
    imageUploadUrl: '' + localStorage.getItem('tw_tech_accessToken')
  };
  constructor(
    private _location: Location,
    private _articleService: ArticleService,
    private _articleEditService: ArticleEditService,
     private _router: Router,
  ) { }

  ngOnInit() {
    if (this._location.path().split('/')[2] == 'add') {
      this.isAdd = true;
    } else {
      this.isAdd = false;
      this.id = this._location.path().split('/')[3];
      this.getarticle();
    }
    this.title = this.isAdd ? '增加文章' : '编辑文章';

  }
  public getarticle(): void {
    this._articleService.getArticleDetail({
      id: this.id
    }).subscribe(result => {

      this.article.title = result[0].title;
      this.article.abstract = result[0].abstract;
      this.article.content = result[0].content;
    })
  }
  public goBack(): void {
    this._location.back();
  }
  public addArticle(): void {
    this._articleEditService.addArticle({
      title: this.article.title,
      abstract: this.article.abstract,
      content: this.article.content
    }).subscribe(result => {
      if(result.message=='添加成功'){
        this._router.navigateByUrl('/admin');
      }

    })
  }
}
