import { replyreport } from './../models/reply-report';
import { ReportServicesService } from './../services/report-services.service';
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-forum-reports-list',
  templateUrl: './forum-reports-list.component.html',
  styleUrls: ['./forum-reports-list.component.css']
})
export class ForumReportsListComponent implements OnInit {
  listreports : []

  constructor(

    private forumapi : ReportServicesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.forumapi.listreplyreports().subscribe(i=>{
      let vou  =new replyreport()
      this.listreports = i ;
      console.log(i)
    })
  }
  toforumreportdetails(rp : replyreport)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament: rp
      }
    };
    this.router.navigate(['forumreportdetail'], navigationExtras);
  }
}
