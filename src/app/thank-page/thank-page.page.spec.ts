import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankPagePage } from './thank-page.page';

describe('ThankPagePage', () => {
  let component: ThankPagePage;
  let fixture: ComponentFixture<ThankPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
