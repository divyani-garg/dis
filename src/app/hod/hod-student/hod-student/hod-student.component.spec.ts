import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodStudentComponent } from './hod-student.component';

describe('HodStudentComponent', () => {
  let component: HodStudentComponent;
  let fixture: ComponentFixture<HodStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
