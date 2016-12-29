/*
 * Angular 2 decorators and services
 */
import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {

  constructor(
  ) {
    this.name = 'Angular 2 Preboot';
  }

  ngOnInit() {
    console.log(`Initializing 'App' component`);
  }

}
