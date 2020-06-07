import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReportDetailsComponent } from './forum-report-details.component';

describe('ForumReportDetailsComponent', () => {
  let component: ForumReportDetailsComponent;
  let fixture: ComponentFixture<ForumReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
