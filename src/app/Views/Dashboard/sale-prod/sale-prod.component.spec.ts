import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProdComponent } from './sale-prod.component';

describe('SaleProdComponent', () => {
  let component: SaleProdComponent;
  let fixture: ComponentFixture<SaleProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
