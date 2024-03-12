import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSuccessTopComponent } from './alert-success-top.component';

describe('AlertSuccessTopComponent', () => {
  let component: AlertSuccessTopComponent;
  let fixture: ComponentFixture<AlertSuccessTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSuccessTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertSuccessTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
