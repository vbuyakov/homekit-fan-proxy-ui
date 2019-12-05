import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciesComponent } from './referencies.component';

describe('ReferenciesComponent', () => {
  let component: ReferenciesComponent;
  let fixture: ComponentFixture<ReferenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
