import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCompletedAppointmentComponent } from './confirm-completed-appointment.component';

describe('ConfirmCompletedAppointmentComponent', () => {
  let component: ConfirmCompletedAppointmentComponent;
  let fixture: ComponentFixture<ConfirmCompletedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCompletedAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmCompletedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
