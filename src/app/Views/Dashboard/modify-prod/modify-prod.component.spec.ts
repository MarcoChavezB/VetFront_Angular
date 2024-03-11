import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProdComponent } from './modify-prod.component';

describe('ModifyProdComponent', () => {
  let component: ModifyProdComponent;
  let fixture: ComponentFixture<ModifyProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
