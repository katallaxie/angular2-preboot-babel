import { inject, describe, beforeEach, it, expect } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BaseRequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (backend, defaultOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions],
      },
      HomeComponent,
    ],
  }));

  it('should have a title', inject([ HomeComponent ], (home) => {
    expect(!!home.title).toEqual(true);
  }));

  // it('should log ngOnInit', inject([ HomeComponent ], (home) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   home.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
