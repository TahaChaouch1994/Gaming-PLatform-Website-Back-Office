import { TestBed } from '@angular/core/testing';

import { TournamentadminService } from './tournamentadmin.service';

describe('TournamentadminService', () => {
  let service: TournamentadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
