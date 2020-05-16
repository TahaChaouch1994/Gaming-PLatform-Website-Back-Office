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


const routes: Routes = [
  { path: 'tournamentadmin', component: TournamentadminComponent },
  { path: 'tournamentrequestadmin', component: TournamentrequestsadminComponent },
  { path: 'tournamentrequestadmindetail', component: TournamentrequestsadmindetailComponent},
  { path: 'acceptedtournament', component: AcceptedtournamentsComponent},
  { path: 'acceptedtournamentdetail', component: AcceptedtournamentdetailComponent},
  { path: 'brackettournament', component: BrackettournamentComponent},
  { path: 'pickwinner', component: PickwinnerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
