import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarassouelComponent } from './carassouel.component';

describe('CarassouelComponent', () => {
  let component: CarassouelComponent;
  let fixture: ComponentFixture<CarassouelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarassouelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarassouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
