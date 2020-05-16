import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrackettournamentComponent } from './brackettournament.component';

describe('BrackettournamentComponent', () => {
  let component: BrackettournamentComponent;
  let fixture: ComponentFixture<BrackettournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrackettournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrackettournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
