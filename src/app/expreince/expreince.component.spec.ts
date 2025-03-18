import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpreinceComponent } from './expreince.component';

describe('ExpreinceComponent', () => {
  let component: ExpreinceComponent;
  let fixture: ComponentFixture<ExpreinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpreinceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpreinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
