import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetFormComponent } from './register-pet-form.component';

describe('RegisterPetFormComponent', () => {
  let component: RegisterPetFormComponent;
  let fixture: ComponentFixture<RegisterPetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPetFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
