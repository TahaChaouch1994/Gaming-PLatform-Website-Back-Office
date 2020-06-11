import { ListbannedusersComponent } from './listbannedusers/listbannedusers.component';
import { BetReportsListComponent } from './bet-reports-list/bet-reports-list.component';
import { ForumReportsListComponent } from './forum-reports-list/forum-reports-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentadminComponent } from './tournamentadmin/tournamentadmin.component';
import { TournamentrequestsadminComponent } from './tournamentrequestsadmin/tournamentrequestsadmin.component';
import { TournamentrequestsadmindetailComponent } from './tournamentrequestsadmindetail/tournamentrequestsadmindetail.component';
import { AcceptedtournamentsComponent } from './acceptedtournaments/acceptedtournaments.component';
import { AcceptedtournamentdetailComponent } from './acceptedtournamentdetail/acceptedtournamentdetail.component';
import { BrackettournamentComponent } from './brackettournament/brackettournament.component';
import { BracketoftournamentComponent } from './bracketoftournament/bracketoftournament.component';
import { PickwinnerComponent } from './pickwinner/pickwinner.component';
import { ForumReportDetailsComponent } from './forum-report-details/forum-report-details.component';
import { BetReportDetailsComponent } from './bet-report-details/bet-report-details.component';


const routes: Routes = [
  { path: 'tournamentadmin', component: TournamentadminComponent },
  { path: 'tournamentrequestadmin', component: TournamentrequestsadminComponent },
  { path: 'tournamentrequestadmindetail', component: TournamentrequestsadmindetailComponent},
  { path: 'acceptedtournament', component: AcceptedtournamentsComponent},
  { path: 'acceptedtournamentdetail', component: AcceptedtournamentdetailComponent},
  { path: 'brackettournament', component: BrackettournamentComponent},
  { path: 'pickwinner', component: PickwinnerComponent},
  { path: 'forumreports', component: ForumReportsListComponent},
  { path: 'forumreportdetail', component: ForumReportDetailsComponent},
  { path: 'betreports', component: BetReportsListComponent},
  { path: 'betreportdetails', component: BetReportDetailsComponent},
  { path: 'listbanned', component: ListbannedusersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
