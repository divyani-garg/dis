import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLectureComponent } from './expert-lecture.component';

describe('ExpertLectureComponent', () => {
  let component: ExpertLectureComponent;
  let fixture: ComponentFixture<ExpertLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
