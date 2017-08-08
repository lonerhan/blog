import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ArticleEditService {

    constructor(
        private _http: Http
    ) { }


    public addArticle(params: any): Observable<any> {
        let data = new URLSearchParams();
        data.append('content', params.content);
        data.append('abstract', params.abstract);
        data.append('title', params.title);
        return this._http.post('http://ivyesthan.cn/api/v1/article/save' , data)
            .map((res: Response) => {
                let result = res.json();
                if (result) {
                    return result;//成功就返回数据
                } else {
                    return false;//不成功返回false
                }
            })
    }


}