import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdropdownComponent } from './userdropdown.component';

describe('UserdropdownComponent', () => {
  let component: UserdropdownComponent;
  let fixture: ComponentFixture<UserdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
