import { Couponreport } from './../models/coupon-report';
import { Component, OnInit } from '@angular/core';
import { ReportServicesService } from './../services/report-services.service';
import {SnotifyService} from 'ng-snotify';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-bet-reports-list',
  templateUrl: './bet-reports-list.component.html',
  styleUrls: ['./bet-reports-list.component.css']
})
export class BetReportsListComponent implements OnInit {
  listreports : []
  constructor(
    private snotifyService: SnotifyService,
    private router: Router,
    private forumapi : ReportServicesService,
  ) { }

  ngOnInit(): void {
    this.forumapi.listbetreports().subscribe(i=>{
      
      this.listreports = i ;
      this.listreports.forEach(p=>{
        console.log(p["state"]);
      })
      console.log(i)
    })
  }
  tobetreportdetails(rp : Couponreport)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        dataTournament: rp
      }
    };
    this.router.navigate(['betreportdetails'], navigationExtras);
  }
}
