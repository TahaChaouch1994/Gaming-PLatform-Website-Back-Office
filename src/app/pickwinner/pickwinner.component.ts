import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TournamentadminService } from '../services/tournamentadmin.service';

@Component({
  selector: 'app-pickwinner',
  templateUrl: './pickwinner.component.html',
  styleUrls: ['./pickwinner.component.css']
})
export class PickwinnerComponent implements OnInit {

  data :any;
  data2: any;
  data4: any;
  file;
  test2;



  websitekeypublic = '0xb1103661bA1736EC0C83931ce12851158b62875d';
  websitekeyprivate = 'FBC91BC13160049E0B165D789CE2B91040C9648393A3143C2F181A61E26D69DD';
  clientkeypublic = '0xe07657d21E49E74b38CD0B0F7eD9d032C99fB7bf';
  clientkeyprivate = '7E465C95AF3B3741772865424973398A9A02A7680EADACD89CDC4ACD22A907B9';


  constructor(private route: ActivatedRoute, private router: Router,private tourServiceAdmin : TournamentadminService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament3;
        this.data2 = this.router.getCurrentNavigation().extras.state.dataTournament2;
        this.data4 = this.router.getCurrentNavigation().extras.state.dataTournament4;
      }
    });
  }

  ngOnInit(): void {
  }



  justClick(file,round)
  {

    this.tourServiceAdmin.pickwinner(this.data2,round,file,file)
    .subscribe(data4 => this.test2 = data4);


    if(round ==4)
    {
      this.tourServiceAdmin.transactionESDtournament(this.websitekeypublic,this.websitekeyprivate,this.clientkeypublic,this.data4)
      .subscribe();
    }


    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament5: this.data2,
      }
    };
    this.router.navigate(['brackettournament'], navigationExtras);

  }



}
