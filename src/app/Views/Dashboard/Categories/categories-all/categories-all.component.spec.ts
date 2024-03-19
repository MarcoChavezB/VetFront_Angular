import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAllComponent } from './categories-all.component';

describe('CategoriesAllComponent', () => {
  let component: CategoriesAllComponent;
  let fixture: ComponentFixture<CategoriesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
