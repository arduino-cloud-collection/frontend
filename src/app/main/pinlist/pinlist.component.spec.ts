import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinlistComponent } from './pinlist.component';

describe('PinlistComponent', () => {
  let component: PinlistComponent;
  let fixture: ComponentFixture<PinlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
