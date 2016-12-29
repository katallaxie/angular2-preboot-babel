import { inject } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppComponent,
    ]}));

  it('should have a name', inject([ AppComponent ], (app) => {
    expect(!!app.name).toEqual(true);
  }));
});
