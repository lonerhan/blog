import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from '../home/home.component';
import { ArticleComponent } from '../article/article.component';
import { NotFoundComponent } from '../notFound/notFound.component';
import { LoginComponent } from '../login/login.component';
import { NavBarComponent } from '../navBar/navBar.component';
import { AdminComponent } from '../admin/admin.component';
import { ArticleEditComponent } from '../admin/articleEdit/articleEdit.component';
import { AppRoutingModule } from './app.routes'
import { CKEditorModule }                                 from 'ng2-ckeditor';
import { HomeService } from '../home/home.service';
import { ArticleService } from '../article/article.service';
import { AuthService } from '../login/auth.service';
import { ArticleEditService } from '../admin/articleEdit/articleEdit.service';
import { AuthGuard } from '../login/auth-guard.service';
//css
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jackblog-sass/dist/index.css'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleComponent,
    NotFoundComponent,
    LoginComponent,
    NavBarComponent,
    AdminComponent,
    ArticleEditComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [
    HomeService,
    ArticleService,
    AuthService,
    ArticleEditService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
