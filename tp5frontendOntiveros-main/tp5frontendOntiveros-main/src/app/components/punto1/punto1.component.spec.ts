import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1Component } from './punto1.component';

describe('Punto1Component', () => {
  let component: Punto1Component;
  let fixture: ComponentFixture<Punto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Punto1Component]
    });
    fixture = TestBed.createComponent(Punto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});