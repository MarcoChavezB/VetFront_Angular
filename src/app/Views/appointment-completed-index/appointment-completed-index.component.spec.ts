import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCompletedIndexComponent } from './appointment-completed-index.component';

describe('AppointmentCompletedIndexComponent', () => {
  let component: AppointmentCompletedIndexComponent;
  let fixture: ComponentFixture<AppointmentCompletedIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentCompletedIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentCompletedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
