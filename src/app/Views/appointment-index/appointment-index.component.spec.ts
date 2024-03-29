import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentIndexComponent } from './appointment-index.component';

describe('AppointmentIndexComponent', () => {
  let component: AppointmentIndexComponent;
  let fixture: ComponentFixture<AppointmentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
