import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceupdateComponent } from './serviceupdate.component';

describe('ServiceupdateComponent', () => {
  let component: ServiceupdateComponent;
  let fixture: ComponentFixture<ServiceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
