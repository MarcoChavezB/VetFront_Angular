import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDesactivatedComponent } from './categories-desactivated.component';

describe('CategoriesDesactivatedComponent', () => {
  let component: CategoriesDesactivatedComponent;
  let fixture: ComponentFixture<CategoriesDesactivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesDesactivatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesDesactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
