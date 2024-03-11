import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReopenAppointmentComponent } from './confirm-reopen-appointment.component';

describe('ConfirmReopenAppointmentComponent', () => {
  let component: ConfirmReopenAppointmentComponent;
  let fixture: ComponentFixture<ConfirmReopenAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmReopenAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmReopenAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
