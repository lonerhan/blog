import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Location } from '@angular/common';

@Injectable()
export class AuthService {
  constructor(
    private _http: Http,
    private _router: Router,
    private _location: Location

  ) { }

  /**
   * 登录帐号
   */
  public login(user: any): Observable<boolean> {
    let data = new URLSearchParams();
    data.append('user_name', user.userName);
    data.append('password', user.password);
    return this._http.post( 'http://ivyesthan.cn/api/v1/user/login', data)
      .map((res: Response) => {
        let userInfo = res.json();
        if (userInfo) {
          localStorage.setItem('wuhanBlog', JSON.stringify(userInfo));
          if( userInfo.user ){
            localStorage.setItem('wuhanBlogAccessToken', userInfo.user);
          }
          return userInfo;
        } else {
          return false;
        }
      });
  }

  /**
   * 退出帐号
   */
  public logout(): void {
    localStorage.removeItem('wuhanBlog');
    localStorage.removeItem('wuhanBlogAccessToken');
    this._router.navigateByUrl('/login');
  }

  /**
   * 获取昵称
   */
  public getRealName() {
    return JSON.parse(localStorage.getItem('wuhanBlog')).realName || '';
  }

  /**
   * 获取用户名
   */
  public getUserName() {
    return JSON.parse(localStorage.getItem('wuhanBlog')).userName || '';
  }

  /**
   * 获取权限菜单
   */
  public getRoleItem(){
    if(JSON.parse(localStorage.getItem('wuhanBlog'))){
      return JSON.parse(localStorage.getItem('wuhanBlog')).roleItem || '';
    }else{
      return '';
    }

  }

  /**
   * 检查状态
   */
  public loggedIn(): boolean {
    return localStorage.getItem('wuhanBlogAccessToken') !== null;
  }

  /**
   * 检查权限
   */
  public hasRole(): boolean {
    //let roleItem = JSON.parse(localStorage.getItem('wuhanBlog')).roleItem;
    //let currentRouter = this._location.path().split('/')[1];
    let result;
    //if(roleItem === "all"){
      result = true;
    //}else {
    //  roleItem = roleItem +",login,home,deny";
    //  var roleItemArray = roleItem.split(",");
    //  roleItemArray.forEach((item: {}) =>{
    //    if(item === currentRouter){
    //      result = true;
    //    }
    //  });
    //}
    return result;
  }
}
