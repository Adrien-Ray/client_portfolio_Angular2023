import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormValue } from '../models/formValue.model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  apiEndPoint! : string;
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }
  headers = new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'*',
    'content-type': 'application/json',
  });  
  requestOptions = { headers: this.headers };
  sendMail(formObj : FormValue, constformValidAction: any){
    console.log('to send : ', formObj);
    const body = JSON.stringify(formObj);
    console.log('body : ', body);
    /* return this.http.post<any>(`${this.apiEndPoint}mail.php`, body, { headers } ).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }),
      map(res => console.log(res)),
    ) */
    return this.http.post<any>(`${this.apiEndPoint}mail.php`, body/* , this.requestOptions */ ).subscribe({
      next: data => {
          console.log(data);
          constformValidAction(2);
      },
      error: error => {
          console.error('There was an error!', error);
          constformValidAction(1);
      }
    })
  }
}
