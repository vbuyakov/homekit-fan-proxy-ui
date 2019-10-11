import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureProfilesComponent } from './temperature-profiles.component';

describe('TemperatureProfilesComponent', () => {
  let component: TemperatureProfilesComponent;
  let fixture: ComponentFixture<TemperatureProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
