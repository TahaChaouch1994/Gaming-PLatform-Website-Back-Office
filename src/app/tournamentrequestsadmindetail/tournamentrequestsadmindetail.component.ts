import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentadminService } from '../services/tournamentadmin.service';
import { Tournament } from '../models/tournament';

@Component({
  selector: 'app-tournamentrequestsadmindetail',
  templateUrl: './tournamentrequestsadmindetail.component.html',
  styleUrls: ['./tournamentrequestsadmindetail.component.css']
})
export class TournamentrequestsadmindetailComponent implements OnInit {

   data :any;
   websitekeypublic = '0xb1103661bA1736EC0C83931ce12851158b62875d';
   websitekeyprivate = 'FBC91BC13160049E0B165D789CE2B91040C9648393A3143C2F181A61E26D69DD';
   clientkeypublic = '0xe07657d21E49E74b38CD0B0F7eD9d032C99fB7bf';
   clientkeyprivate = '7E465C95AF3B3741772865424973398A9A02A7680EADACD89CDC4ACD22A907B9';



  constructor(private route: ActivatedRoute, private router: Router,private tourServiceAdmin : TournamentadminService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament;
      }
    });
  }

  ngOnInit(): void {
    
  }


  acceptTournamentRequest(data2)
  {
      this.tourServiceAdmin.acceptTournamentRequest(data2).subscribe();
      this.router.navigate(['tournamentrequestadmin']);
  }

  declineTournamentRequest(data3,event)
  {
      this.tourServiceAdmin.declineTournamentRequest(data3,event).subscribe();
      console.log(data3,event);

      this.tourServiceAdmin.transactionESDtournament(this.websitekeypublic,this.websitekeyprivate,this.clientkeypublic,this.data.lastPrice)
       .subscribe();
      this.router.navigate(['tournamentrequestadmin']); 


  }

  
}
