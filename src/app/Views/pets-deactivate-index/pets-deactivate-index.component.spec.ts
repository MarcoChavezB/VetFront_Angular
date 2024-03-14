import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDeactivateIndexComponent } from './pets-deactivate-index.component';

describe('PetsDeactivateIndexComponent', () => {
  let component: PetsDeactivateIndexComponent;
  let fixture: ComponentFixture<PetsDeactivateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsDeactivateIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsDeactivateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
