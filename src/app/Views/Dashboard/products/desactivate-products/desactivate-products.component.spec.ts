import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivateProductsComponent } from './desactivate-products.component';

describe('DesactivateProductsComponent', () => {
  let component: DesactivateProductsComponent;
  let fixture: ComponentFixture<DesactivateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesactivateProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesactivateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
