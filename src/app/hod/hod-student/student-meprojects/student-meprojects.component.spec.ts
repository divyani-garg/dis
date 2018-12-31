import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMEProjectsComponent } from './student-meprojects.component';

describe('StudentMEProjectsComponent', () => {
  let component: StudentMEProjectsComponent;
  let fixture: ComponentFixture<StudentMEProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMEProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMEProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
