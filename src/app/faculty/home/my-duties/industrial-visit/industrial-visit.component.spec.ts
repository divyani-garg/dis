import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialVisitComponent } from './industrial-visit.component';

describe('IndustrialVisitComponent', () => {
  let component: IndustrialVisitComponent;
  let fixture: ComponentFixture<IndustrialVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
