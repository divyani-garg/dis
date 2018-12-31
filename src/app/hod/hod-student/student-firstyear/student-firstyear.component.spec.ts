import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFirstyearComponent } from './student-firstyear.component';

describe('StudentFirstyearComponent', () => {
  let component: StudentFirstyearComponent;
  let fixture: ComponentFixture<StudentFirstyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFirstyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
