import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navBar></app-navBar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
