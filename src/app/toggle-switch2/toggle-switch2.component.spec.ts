import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitch2Component } from './toggle-switch2.component';

describe('ToggleSwitch2Component', () => {
  let component: ToggleSwitch2Component;
  let fixture: ComponentFixture<ToggleSwitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleSwitch2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleSwitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
