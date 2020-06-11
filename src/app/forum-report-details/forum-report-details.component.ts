import { ReportServicesService } from './../services/report-services.service';
import { replyreport } from './../models/reply-report';
import { Component, OnInit } from '@angular/core';
import {SnotifyService} from 'ng-snotify';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-forum-report-details',
  templateUrl: './forum-report-details.component.html',
  styleUrls: ['./forum-report-details.component.css']
})
export class ForumReportDetailsComponent implements OnInit {
  data :any;
  det : replyreport ;
  constructor(private route: ActivatedRoute, private router: Router,private forser : ReportServicesService,private snotifyService: SnotifyService,) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dataTournament;
      }
    });
   }

  ngOnInit(): void {

    this.det = this.data;
    
  }
deletepot(){
  
  this.snotifyService.confirm('Do you really want to delete this post ? ', '', {
    timeout: 2000,
    showProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    buttons: [
      {text: 'Yes', action: (toast) => {  console.log(this.det.reply["_id"])
      console.log(this.det.reply.id)
      
    this.forser.deletepos(this.det.reply["_id"]).subscribe();
    let p = "checked and approved";
    this.forser.updatestatereportforum(this.det["_id"],p).subscribe(res=>{
      this.snotifyService.remove(toast.id); }
    
      
    );

      }
    },
    {text: 'No', action: (toast) =>{ console.log('Clicked: No');this.snotifyService.remove(toast.id);}},
      {text: 'Later', action: (toast) => {console.log('Clicked: Later'); this.snotifyService.remove(toast.id); } },
      {text: 'Close', action: (toast) => {console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true},
    ]
  });

}

deleteandbanpot(){
  console.log(this.det.reply["_id"])
    console.log(this.det.reply.id)
    this.snotifyService.confirm('Do you really want to ban this user ? ', '', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: (toast) => {   this.forser.deletepos(this.det.reply["_id"]).subscribe();
        let p = "checked , approved and user banned";
        let us = 0;
        this.forser.updatestatereportforum(this.det["_id"],p).subscribe();
        this.forser.banuserfromforum(this.det.sender["id_user"],us).subscribe(pos=>{
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
dismissreport(){
  this.snotifyService.confirm('Do you really want to dismiss this report ?', '', {
    timeout: 2000,
    showProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    buttons: [
      {text: 'Yes', action: (toast) => {     console.log(this.det.reply["_id"])
      console.log(this.det.reply.id)
    
    let p = "checked and dismissed";
    this.forser.updatestatereportforum(this.det["_id"],p).subscribe(opp => {
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
}
