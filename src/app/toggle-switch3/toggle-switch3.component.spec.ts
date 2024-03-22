import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitch3Component } from './toggle-switch3.component';

describe('ToggleSwitch3Component', () => {
  let component: ToggleSwitch3Component;
  let fixture: ComponentFixture<ToggleSwitch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleSwitch3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleSwitch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
