import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAreaComponent } from './calculate-area.component';

describe('CalculateAreaComponent', () => {
  let component: CalculateAreaComponent;
  let fixture: ComponentFixture<CalculateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
