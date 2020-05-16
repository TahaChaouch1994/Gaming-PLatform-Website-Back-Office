import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedtournamentsComponent } from './acceptedtournaments.component';

describe('AcceptedtournamentsComponent', () => {
  let component: AcceptedtournamentsComponent;
  let fixture: ComponentFixture<AcceptedtournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedtournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedtournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
