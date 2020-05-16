import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TournamentadminService } from '../services/tournamentadmin.service';

@Component({
  selector: 'app-brackettournament',
  templateUrl: './brackettournament.component.html',
  styleUrls: ['./brackettournament.component.css']
})
export class BrackettournamentComponent implements OnInit {



  data :any;
  data4:any;
  length:any;
  number3;number2;
  data2 = [];
  test = [];
  i= 0;
  test2;
  value1;
  

  


  constructor(private route: ActivatedRoute, private router: Router,private tourServiceAdmin : TournamentadminService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament2;
        if(this.data == null)
        {
          this.data = this.router.getCurrentNavigation().extras.state.dataTournament5;
        }
        this.data4 = this.router.getCurrentNavigation().extras.state.dataTournament4;
      }
    });
  }

  ngOnInit(): void {

    this.tourServiceAdmin.getBracketPlayers(this.data)
    .subscribe(response2 =>{
      this.number3= response2;
    
    });

    
  }



  pickAWinner()
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament2: this.data,
        dataTournament3:this.number3,
        dataTournament4:this.data4
      }
    };
    this.router.navigate(['pickwinner'], navigationExtras);
  }
}
