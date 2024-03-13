import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsUserComponent } from './prescriptions-user.component';

describe('PrescriptionsUserComponent', () => {
  let component: PrescriptionsUserComponent;
  let fixture: ComponentFixture<PrescriptionsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescriptionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
