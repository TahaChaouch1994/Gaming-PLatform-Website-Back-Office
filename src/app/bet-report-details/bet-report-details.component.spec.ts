import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetReportDetailsComponent } from './bet-report-details.component';

describe('BetReportDetailsComponent', () => {
  let component: BetReportDetailsComponent;
  let fixture: ComponentFixture<BetReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
