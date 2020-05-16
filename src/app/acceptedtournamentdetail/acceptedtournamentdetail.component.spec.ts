import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedtournamentdetailComponent } from './acceptedtournamentdetail.component';

describe('AcceptedtournamentdetailComponent', () => {
  let component: AcceptedtournamentdetailComponent;
  let fixture: ComponentFixture<AcceptedtournamentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedtournamentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedtournamentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
