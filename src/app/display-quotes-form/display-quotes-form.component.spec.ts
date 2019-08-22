import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuotesFormComponent } from './display-quotes-form.component';

describe('DisplayQuotesFormComponent', () => {
  let component: DisplayQuotesFormComponent;
  let fixture: ComponentFixture<DisplayQuotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuotesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
