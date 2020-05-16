import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TournamentadminService } from '../services/tournamentadmin.service';

@Component({
  selector: 'app-acceptedtournamentdetail',
  templateUrl: './acceptedtournamentdetail.component.html',
  styleUrls: ['./acceptedtournamentdetail.component.css']
})
export class AcceptedtournamentdetailComponent implements OnInit {

  data :any;
  number3;number2;
  data2 = [];
  test = [];
  i= 0;
  test2;


  constructor(private route: ActivatedRoute, private router: Router,private tourServiceAdmin : TournamentadminService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament;
      }
    });
  }


  ngOnInit() {

    this.number2= 0;

    this.tourServiceAdmin.numberofplacesroomtournament(this.data.tournamentname)
    .subscribe(response2 =>{
      this.number3= response2;

      this.number2=  parseInt(this.number3);
    });


    this.tourServiceAdmin.numberofplayers(this.data.tournamentname)
    .subscribe(data => this.data2 = data);





  }

  



showTable()
{
  console.log(this.test[0]);
  console.log(this.test[1]);
  console.log(this.test[2]);
  console.log(this.test[3]);
}




  toBracket(dataTournament2,tournamentfee,entryfee,number)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament2: dataTournament2,
        dataTournament3:this.test.length,
        dataTournament4:parseInt(tournamentfee)+(parseInt(entryfee) * parseInt(number))
      }
    };
    this.router.navigate(['brackettournament'], navigationExtras);
  }



  justTest()
  {
    for(let item of this.data2){

      for(let item2 of item.players)
       {this.test[this.i]  = item2.username;}
      this.i++;

    }



    this.test = this.tourServiceAdmin.shuffle(this.test);

    if(this.test.length  == 4)
    {

      this.tourServiceAdmin.pickwinner(this.test,this.data._id,0,1)
      .subscribe(data4 => this.test2 = data4);

      this.tourServiceAdmin.generatebracketfortournament(this.test,this.data._id,2,3)
      .subscribe(data4 => this.test2 = data4);
    

    }




  }
}
