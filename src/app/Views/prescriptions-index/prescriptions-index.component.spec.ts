import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsIndexComponent } from './prescriptions-index.component';

describe('PrescriptionsIndexComponent', () => {
  let component: PrescriptionsIndexComponent;
  let fixture: ComponentFixture<PrescriptionsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionsIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescriptionsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
