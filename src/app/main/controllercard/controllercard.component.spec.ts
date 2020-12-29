import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllercardComponent } from './controllercard.component';

describe('ControllercardComponent', () => {
  let component: ControllercardComponent;
  let fixture: ComponentFixture<ControllercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
