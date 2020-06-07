import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetReportsListComponent } from './bet-reports-list.component';

describe('BetReportsListComponent', () => {
  let component: BetReportsListComponent;
  let fixture: ComponentFixture<BetReportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetReportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
