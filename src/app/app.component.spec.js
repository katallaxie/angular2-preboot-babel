import { NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe(`AppComponent`, () => {
  let comp, fixture;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should be readly constructed', () => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();

    expect(comp).toBeDefined();
  });

  it(`should have a title`, () => {
    expect(comp.name).toEqual('Angular 2 Preboot');
  })

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
