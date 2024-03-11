import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProdComponent } from './agregar-prod.component';

describe('AgregarProdComponent', () => {
  let component: AgregarProdComponent;
  let fixture: ComponentFixture<AgregarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
