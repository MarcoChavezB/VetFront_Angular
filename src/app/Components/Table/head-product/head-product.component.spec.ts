import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadProductComponent } from './head-product.component';

describe('HeadProductComponent', () => {
  let component: HeadProductComponent;
  let fixture: ComponentFixture<HeadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
