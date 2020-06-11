import { Singlegame } from './../models/singlegame';
import { Betcoupon } from './../models/betcoupon';
import { Couponreport } from './../models/coupon-report';
import { Component, OnInit } from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Matchresultdetails } from '../models/matchresultdetails';
import { BetserviceService } from '../services/betservice.service';
import { cpus } from 'os';
import { element } from 'protractor';
import { ReportServicesService } from './../services/report-services.service';
@Component({
  selector: 'app-bet-report-details',
  templateUrl: './bet-report-details.component.html',
  styleUrls: ['./bet-report-details.component.css']
})
export class BetReportDetailsComponent implements OnInit {
  data :any;
  det : Couponreport ;
  couponid : any
  pog : string

  betsz = []
  zz = []
  i  = 0 
  w = 0 
  betc : Betcoupon ;
    //sbm = new Matchresultdetails()
    
    modalitem = new Singlegame()
  bcop = []
  coupstatus : string
  paystatus : string
  status : string
 
  sgr = new Matchresultdetails()
  idth : any
   userpublickey : string;


  constructor(private route: ActivatedRoute, private router: Router,public betser : BetserviceService,  private snotifyService: SnotifyService,private forser : ReportServicesService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament;
      }
    });
   }

   ngOnInit(): void {
 
    
    this.det = this.data;
    this.couponid = this.det.coupon.couponid;
    console.log(this.det.sender.id_user)
   this.forser.userHasWallet(this.det.sender.id_user).subscribe(ee=>{
      console.log("eeeeeeeeeeeee");
      console.log(ee["adr"]);
      console.log("eeeeeeeeeeee");
      this.userpublickey = ee["adr"];
    })

    this.aze();
  }
  aze(){


 
    this.betser.getcouponbyidc(this.couponid).subscribe(i=>{
      this.coupstatus = i.status
      this.paystatus =  i.payementstatus
      this.zz = i.coupongames
      
      let cpo = new Betcoupon()
      cpo = i ;
      this.betc = i ;
      cpo.couponid = i._id
      i.coupongames.forEach(element => {
      this.betsz.push(element)  
  
      });
      this.betsz.forEach(element=>{
       
        this.betser.betmatchdetails(element.id).subscribe(bd=>{
     
         
          let  sbm = new Matchresultdetails()
          sbm.Playedat = bd.begin_at
          sbm.matchid = bd.id
         
          sbm.team1 = element.team1
          sbm.team2 = element.team2
          sbm.team2id = element.team2id
          sbm.team1id = element.team1id
          sbm.whowillwin = element.winningTeam
          if(bd.winner !== null)
          {
         

          if(bd.winner.id === element.team1id && element.winningTeam ===1 )
          {
            sbm.result = "correct"
            i++
            sbm.winner = 1
          }

          
          if(bd.winner.id === element.team2id && element.winningTeam === 2 )
          {
            sbm.result = "correct"
            i++
            sbm.winner = 2
          }
          if(bd.winner.id === element.team1id && element.winningTeam === 2 )
          {
            sbm.result = "wrong"
            this.w ++
            sbm.winner = 1
          }
          if(bd.winner.id === element.team2id && element.winningTeam ===1 )
          {
            this.w ++ 
            cpo.status = "wrong"
            sbm.winner = 2

          }


          }
        
          if(bd.winner=== null){
            sbm.result = "en cours"
            sbm.winner = 0
          }

          
       
          
 
          this.bcop.push(sbm)
  

          if(i === this.betsz.length)
          {
            cpo.status = "won"
            cpo.payementstatus = "payable"
            this.paystatus = "waiting for resut"
          }
          if(i < this.betsz.length && this.w === 0)
          {
            cpo.status = "en cours"
            cpo.payementstatus = "waiting for resut"
            this.paystatus = "waiting for resut"
          }
          if(this.w > 0)
          {
            cpo.status = "lost"
            cpo.payementstatus = "lost"
          }
    
       
          this.betser.changestatus(cpo.couponid,cpo.status).subscribe()
        }
        
        )
     
      })
      }
    )
   } 



   loadgame(element){
   
     this.modalitem = element;
    
     this.betser.betmatchdetails(element.matchid).subscribe(bd=>{
     
      let p : string;
      this.sgr.Playedat = bd.begin_at
      this.sgr.matchid = bd.id
      console.log("element")
      console.log(bd )
      console.log(element)
     this.sgr.team1 = element.team1
      this.sgr.team2 = element.team2
      this.sgr.team2id = element.team2id
     this.sgr.team1id = element.team1id
      this.sgr.whowillwin = element.whowillwin
      if(bd.winner !== null)
      {
     

      if(bd.winner.id === element.team1id && element.whowillwin ===1 )
      {
        this.sgr.result = element.team1
        this.sgr.winner = 1
      }

      
      if(bd.winner.id === element.team2id && element.whowillwin === 2 )
      { this.sgr.result = element.team2
        this.sgr.winner = 2
      }
      if(bd.winner.id === element.team1id && element.whowillwin === 2 )
      { this.sgr.result = element.team1
        this.sgr.winner = 1
      }
      if(bd.winner.id === element.team2id && element.whowillwin ===1 )
      {
        this.sgr.result = element.team2
      
        this.sgr.winner = 2
      }


      }
   
      if(bd.winner=== null){
        this.sgr.result = "TBD"
        this.sgr.winner = 0
      }

      
   




     
      
     

    
    }
    
    )
   }
   showpog(){
     console.log(this.sgr)
   }

   dismissreport(){
    console.log(this.det["_id"])
    this.snotifyService.confirm('Do you really want to dismiss this report ?', '', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: (toast) => {    
    
      let p = "checked and dismissed";
      this.forser.updatestatereportbet(this.det["_id"],p).subscribe(opp => {
        this.snotifyService.remove(toast.id); 
      });
  
        }
      },
        {text: 'No', action: (toast) =>{ console.log('Clicked: No');this.snotifyService.remove(toast.id);}},
        {text: 'Later', action: (toast) => {console.log('Clicked: Later'); this.snotifyService.remove(toast.id); } },
        {text: 'Close', action: (toast) => {console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true},
      ]
    });
  
  
  }




  acceptreport(){
    console.log(this.det["_id"])
    this.snotifyService.confirm('Do you really want to accept this report ?', '', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: (toast) => {    
    

        

    let p = "checked and accepted , user payed";
      this.forser.updatestatereportbet(this.det["_id"],p).subscribe(opp => {
        this.snotifyService.remove(toast.id); 
       
       
      });

      
      let geekspublic = '0xe07657d21E49E74b38CD0B0F7eD9d032C99fB7bf';
      let geeksprivate ='7E465C95AF3B3741772865424973398A9A02A7680EADACD89CDC4ACD22A907B9';
      let PublicAddress = "0x1AC7164E008D58bc02a51ea29041bE1f8eAFA8eA"
     let  PrivateKey= '7E465C95AF3B3741772865424973398A9A02A7680EADACD89CDC4ACD22A907B9';
     let userrrrpk = this.userpublickey
      // let PrivateKey =  "1eeb169fa03a6fb2e342cc311ada624ca291fe8a79746254eb6d941709cd5629"
       //let geekspublic = "0xb1103661bA1736EC0C83931ce12851158b62875d"
       let ammount = Math.round(this.det.coupon.potentielgain);
      this.forser.sendcoupon(geekspublic,this.userpublickey,geeksprivate,ammount).subscribe(response => {
        console.log(response)
 

 
   
     });
  
        }
      },
        {text: 'No', action: (toast) =>{ console.log('Clicked: No');this.snotifyService.remove(toast.id);}},
        {text: 'Later', action: (toast) => {console.log('Clicked: Later'); this.snotifyService.remove(toast.id); } },
        {text: 'Close', action: (toast) => {console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true},
      ]
    });
  
  
  }

}
