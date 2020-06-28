import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionButtonComponent } from './conversion-button.component';

describe('ConversionButtonComponent', () => {
  let component: ConversionButtonComponent;
  let fixture: ComponentFixture<ConversionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
