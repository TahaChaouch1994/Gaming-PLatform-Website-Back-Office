import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReportsListComponent } from './forum-reports-list.component';

describe('ForumReportsListComponent', () => {
  let component: ForumReportsListComponent;
  let fixture: ComponentFixture<ForumReportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumReportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
