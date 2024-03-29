import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetComponent } from './update-pet.component';

describe('UpdatePetComponent', () => {
  let component: UpdatePetComponent;
  let fixture: ComponentFixture<UpdatePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
