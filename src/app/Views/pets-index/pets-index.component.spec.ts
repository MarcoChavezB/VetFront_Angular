import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsIndexComponent } from './pets-index.component';

describe('PetsIndexComponent', () => {
  let component: PetsIndexComponent;
  let fixture: ComponentFixture<PetsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
