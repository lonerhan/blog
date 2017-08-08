
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ArticleComponent } from '../article/article.component';
import { LoginComponent } from '../login/login.component';
import {NotFoundComponent} from '../notFound/notFound.component';
import { AdminComponent } from '../admin/admin.component';
import { ArticleEditComponent } from '../admin/articleEdit/articleEdit.component';
import { AuthGuard } from '../login/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
     path: 'admin/edit/:id',
    component: ArticleEditComponent,
    canActivate: [AuthGuard]
  },
   {
     path: 'admin/add',
    component: ArticleEditComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

