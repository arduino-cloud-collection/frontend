import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincardComponent } from './pincard.component';

describe('PincardComponent', () => {
  let component: PincardComponent;
  let fixture: ComponentFixture<PincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
