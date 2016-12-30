import { NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe(`HomeComponent`, () => {
  let comp, fixture;

  // // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be readly constructed`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();

    expect(comp).toBeDefined();

    console.log(comp);
  });

  it(`should have a title`, () => {
    expect(!!comp.title).toBe(true);
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});