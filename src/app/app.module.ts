import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TournamentadminComponent } from './tournamentadmin/tournamentadmin.component';
import { TournamentrequestsadminComponent } from './tournamentrequestsadmin/tournamentrequestsadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { TournamentrequestsadmindetailComponent } from './tournamentrequestsadmindetail/tournamentrequestsadmindetail.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AcceptedtournamentsComponent } from './acceptedtournaments/acceptedtournaments.component';
import { AcceptedtournamentdetailComponent } from './acceptedtournamentdetail/acceptedtournamentdetail.component';
import { BrackettournamentComponent } from './brackettournament/brackettournament.component';
import { BracketoftournamentComponent } from './bracketoftournament/bracketoftournament.component';
import { PickwinnerComponent } from './pickwinner/pickwinner.component';
import { ForumReportsListComponent } from './forum-reports-list/forum-reports-list.component';
import { BetReportsListComponent } from './bet-reports-list/bet-reports-list.component';
import { BetReportDetailsComponent } from './bet-report-details/bet-report-details.component';
import { ForumReportDetailsComponent } from './forum-report-details/forum-report-details.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ListbannedusersComponent } from './listbannedusers/listbannedusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TournamentadminComponent,
    TournamentrequestsadminComponent,
    TournamentrequestsadmindetailComponent,
    AcceptedtournamentsComponent,
    AcceptedtournamentdetailComponent,
    BrackettournamentComponent,
    BracketoftournamentComponent,
    PickwinnerComponent,
    ForumReportsListComponent,
    BetReportsListComponent,
    BetReportDetailsComponent,
    ForumReportDetailsComponent,
    ListbannedusersComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SnotifyModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */ }),
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
