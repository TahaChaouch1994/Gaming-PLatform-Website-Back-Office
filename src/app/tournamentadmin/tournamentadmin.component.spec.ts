import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentadminComponent } from './tournamentadmin.component';

describe('TournamentadminComponent', () => {
  let component: TournamentadminComponent;
  let fixture: ComponentFixture<TournamentadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
