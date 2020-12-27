import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontrollerComponent } from './newcontroller.component';

describe('NewcontrollerComponent', () => {
  let component: NewcontrollerComponent;
  let fixture: ComponentFixture<NewcontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
