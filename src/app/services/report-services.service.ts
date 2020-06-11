import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {

  base_path = 'http://localhost:1337';
    
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


 


  listbetreports(): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/BetReports/get", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }



  listreplyreports(): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/ReplyReports/get", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deletepos(item): Observable<any> {
    return this.http
    .delete<string>(this.base_path+"/post/remove?id="+item, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  updatestatereportforum(item,sto): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/report/stateupdate?id="+item+"&stt="+sto, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  updatestatereportbet(item,sto): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/reportbet/stateupdate?id="+item+"&stt="+sto, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  banuserfromforum(item,sto): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/user/banforum?id="+item+"&stt="+sto, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  userHasWallet(user): Observable<string>
  {
    return this.http
    .get<string>(this.base_path+"/user/hasWallet?id="+user, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  sendcoupon(firstpublickey, secondpublickey, firstprivatekey, amount): Observable<any> {
    let item = {"firstpublickey":firstpublickey, "secondpublickey":secondpublickey, "firstprivatekey":firstprivatekey, "amount":amount};
    return this.http
      .post<any>(this.base_path+"/bet/transaction", JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  getallbannedusers(): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/bannedusers/get?id=0", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  unbanuserfromforum(item): Observable<any> {
    return this.http
    .get<string>(this.base_path+"/user/banforum?id="+item+"&stt=1", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
