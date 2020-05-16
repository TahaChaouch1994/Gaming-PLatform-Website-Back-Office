import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentadminService } from '../services/tournamentadmin.service';
import { Router, NavigationExtras } from '@angular/router';
import { Tournament } from '../models/tournament';

@Component({
  selector: 'app-acceptedtournaments',
  templateUrl: './acceptedtournaments.component.html',
  styleUrls: ['./acceptedtournaments.component.css']
})
export class AcceptedtournamentsComponent implements OnInit {

  public hell = [];


  constructor(private http: HttpClient,private tourServiceAdmin : TournamentadminService,private router: Router) { }

  ngOnInit() {
    this.tourServiceAdmin.getAllTAcc()
    .subscribe(data => this.hell = data);
  }



  toTournamentDetail(dataTournament : Tournament)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament: dataTournament
      }
    };
    this.router.navigate(['acceptedtournamentdetail'], navigationExtras);
  }


}
