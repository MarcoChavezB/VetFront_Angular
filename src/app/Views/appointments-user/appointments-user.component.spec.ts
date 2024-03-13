import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsUserComponent } from './appointments-user.component';

describe('AppointmentsUserComponent', () => {
  let component: AppointmentsUserComponent;
  let fixture: ComponentFixture<AppointmentsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
