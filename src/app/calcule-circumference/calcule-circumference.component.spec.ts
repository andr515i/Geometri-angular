import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeCircumferenceComponent } from './calcule-circumference.component';

describe('CalculeCircumferenceComponent', () => {
  let component: CalculeCircumferenceComponent;
  let fixture: ComponentFixture<CalculeCircumferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculeCircumferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculeCircumferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
