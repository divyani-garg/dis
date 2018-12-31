import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSectionAComponent } from './documents-section-a.component';

describe('DocumentsSectionAComponent', () => {
  let component: DocumentsSectionAComponent;
  let fixture: ComponentFixture<DocumentsSectionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsSectionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
