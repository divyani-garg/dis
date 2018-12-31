import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTimeTableComponent } from './quiz-time-table.component';

describe('QuizTimeTableComponent', () => {
  let component: QuizTimeTableComponent;
  let fixture: ComponentFixture<QuizTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
