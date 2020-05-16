import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentadminService } from '../services/tournamentadmin.service';
import { Tournament } from '../models/tournament';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tournamentrequestsadmin',
  templateUrl: './tournamentrequestsadmin.component.html',
  styleUrls: ['./tournamentrequestsadmin.component.css']
})
export class TournamentrequestsadminComponent implements OnInit {

  public hell = [];


  constructor(private http: HttpClient,private tourServiceAdmin : TournamentadminService,private router: Router) { }

  ngOnInit() {
    this.tourServiceAdmin.getMyTournamentsAccepted()
    .subscribe(data => this.hell = data);
  }


  toTournamentDetail(dataTournament : Tournament)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament: dataTournament
      }
    };
    this.router.navigate(['tournamentrequestadmindetail'], navigationExtras);
  }

  }


