import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecontrollerComponent } from './singlecontroller.component';

describe('SinglecontrollerComponent', () => {
  let component: SinglecontrollerComponent;
  let fixture: ComponentFixture<SinglecontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
