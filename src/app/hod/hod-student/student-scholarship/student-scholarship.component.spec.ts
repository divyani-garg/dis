import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScholarshipComponent } from './student-scholarship.component';

describe('StudentScholarshipComponent', () => {
  let component: StudentScholarshipComponent;
  let fixture: ComponentFixture<StudentScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
