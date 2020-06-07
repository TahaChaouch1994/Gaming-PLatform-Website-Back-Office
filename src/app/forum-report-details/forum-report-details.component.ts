import { ReportServicesService } from './../services/report-services.service';
import { replyreport } from './../models/reply-report';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-forum-report-details',
  templateUrl: './forum-report-details.component.html',
  styleUrls: ['./forum-report-details.component.css']
})
export class ForumReportDetailsComponent implements OnInit {
  data :any;
  det : replyreport ;
  constructor(private route: ActivatedRoute, private router: Router,private forser : ReportServicesService) {
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
  console.log(this.det.reply["_id"])
    console.log(this.det.reply.id)
    
  this.forser.deletepos(this.det.reply["_id"]).subscribe();
  let p = "checked and approved";
  this.forser.updatestatereportforum(this.det["_id"],p).subscribe();
}

deleteandbanpot(){
  console.log(this.det.reply["_id"])
    console.log(this.det.reply.id)
    
  this.forser.deletepos(this.det.reply["_id"]).subscribe();
  let p = "checked , approved and user banned";
  let us = 0;
  this.forser.updatestatereportforum(this.det["_id"],p).subscribe();
  this.forser.banuserfromforum(this.det.sender["id_user"],us).subscribe();
}
dismissreport(){
  console.log(this.det.reply["_id"])
  console.log(this.det.reply.id)

let p = "checked and dismissed";
this.forser.updatestatereportforum(this.det["_id"],p).subscribe();

}
}
