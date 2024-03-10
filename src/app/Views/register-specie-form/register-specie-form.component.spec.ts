import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpecieFormComponent } from './register-specie-form.component';

describe('RegisterSpecieFormComponent', () => {
  let component: RegisterSpecieFormComponent;
  let fixture: ComponentFixture<RegisterSpecieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSpecieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSpecieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
