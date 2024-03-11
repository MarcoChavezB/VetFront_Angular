import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCancelledIndexComponent } from './appointment-cancelled-index.component';

describe('AppointmentCancelledIndexComponent', () => {
  let component: AppointmentCancelledIndexComponent;
  let fixture: ComponentFixture<AppointmentCancelledIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentCancelledIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentCancelledIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
