import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFouthyearComponent } from './student-fouthyear.component';

describe('StudentFouthyearComponent', () => {
  let component: StudentFouthyearComponent;
  let fixture: ComponentFixture<StudentFouthyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFouthyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFouthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
