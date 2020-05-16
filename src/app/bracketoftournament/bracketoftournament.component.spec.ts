import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketoftournamentComponent } from './bracketoftournament.component';

describe('BracketoftournamentComponent', () => {
  let component: BracketoftournamentComponent;
  let fixture: ComponentFixture<BracketoftournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketoftournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketoftournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
