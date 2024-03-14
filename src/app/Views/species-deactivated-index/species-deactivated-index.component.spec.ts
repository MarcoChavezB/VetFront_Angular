import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDeactivatedIndexComponent } from './species-deactivated-index.component';

describe('SpeciesDeactivatedIndexComponent', () => {
  let component: SpeciesDeactivatedIndexComponent;
  let fixture: ComponentFixture<SpeciesDeactivatedIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesDeactivatedIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesDeactivatedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
