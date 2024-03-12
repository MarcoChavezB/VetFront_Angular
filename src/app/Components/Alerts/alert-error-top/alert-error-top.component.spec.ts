import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertErrorTopComponent } from './alert-error-top.component';

describe('AlertErrorTopComponent', () => {
  let component: AlertErrorTopComponent;
  let fixture: ComponentFixture<AlertErrorTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertErrorTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertErrorTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
