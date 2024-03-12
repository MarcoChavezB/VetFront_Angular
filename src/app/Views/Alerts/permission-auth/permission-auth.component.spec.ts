import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAuthComponent } from './permission-auth.component';

describe('PermissionAuthComponent', () => {
  let component: PermissionAuthComponent;
  let fixture: ComponentFixture<PermissionAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
