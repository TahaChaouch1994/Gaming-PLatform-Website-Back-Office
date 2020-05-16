import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament';
import { Joinedplayers } from '../models/joinedplayers';
import { PlayersBracket } from '../models/players-bracket';

@Injectable({
  providedIn: 'root'
})
export class TournamentadminService {

  private data = []; 

  base_url="http://localhost:3005/tournament/";

  constructor(private http: HttpClient) { }

  
  setData(id,data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }





  getAllTournaments(): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"alltournaments");
  }


  getAllTAcc(): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"alltournamentacc");
  }


  getMyTournamentsAccepted(): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"alltournamentswait");
  }


  acceptTournamentRequest(idtournoi): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"acceptrequesttournament/"+idtournoi);
  }

  declineTournamentRequest(idtournoi,reason): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"declinerequesttournament/"+idtournoi+"/"+reason);
  }

  transactionESDtournament(firstpublickey,firstprivatekey,secondpublickey,amount): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.base_url+"transaction/"+firstpublickey+'/'+firstprivatekey+'/'+secondpublickey+'/'+amount);
  }

  
  numberofplacesroomtournament(tournamentname): Observable<String>
  {
    return this.http.get<String>(this.base_url+"numberofplacesroomtournament/"+tournamentname);
  }



  generatebracketfortournament(players,tournamentid,i,j) : Observable<String>
  {
        return this.http.get<String>(this.base_url+"createbracketfortorunament/"+tournamentid+"/"+2+"/"+players[i]+"/"+players[j]);
  }


  pickwinner(tournamentid,phase,player1,player2) : Observable<String>
  {
        return this.http.get<String>(this.base_url+"createbracketfortorunament/"+tournamentid+"/"+phase+"/"+player1+"/"+player2);
  }



  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }




  numberofplayers(tournamentname): Observable<Joinedplayers[]>
  {
    return this.http.get<Joinedplayers[]>(this.base_url+"getplayersforbracket/"+tournamentname);
  }

  getBracketPlayers(tournamentid): Observable<PlayersBracket[]>
  {
    return this.http.get<PlayersBracket[]>(this.base_url+"getBracketPlayers/"+tournamentid);
  }


}
