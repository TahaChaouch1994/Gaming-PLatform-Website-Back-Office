import { SnotifyService } from 'ng-snotify';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ReportServicesService } from '../services/report-services.service';
import { Router } from '@angular/router';
import { BetserviceService } from '../services/betservice.service';

@Component({
  selector: 'app-listbannedusers',
  templateUrl: './listbannedusers.component.html',
  styleUrls: ['./listbannedusers.component.css']
})
export class ListbannedusersComponent implements OnInit {
  listbanneduserss : []
  constructor(
    public betser : BetserviceService, 
     private snotifyService: SnotifyService,
     private forser : ReportServicesService,
    private forumapi : ReportServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forumapi.getallbannedusers().subscribe(i=>{
      let vou  =new User()
      this.listbanneduserss = i ;
      console.log(i)
    })
  }
  unbanuser(itemm){
    console.log(itemm)
  
    this.snotifyService.confirm('Do you really want to unban  this report ?', '', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: (toast) => {    
    
      
      this.forser.unbanuserfromforum(itemm._id).subscribe(opp => {
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
