import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormValue } from '../models/formValue.model';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  apiEndPoint! : string;
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }
  sendMail(formObj : FormValue){
    console.log('to send : ', formObj);
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(formObj);
    console.log('body : ', body);
    /* return this.http.post<any>(`${this.apiEndPoint}mail.php`, body, { headers } ).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }),
      map(res => console.log(res)),
    ) */
    this.http.post<any>(`${this.apiEndPoint}mail.php`, { mail:"machin@truc.fr", message:"ceci est un message test du matin" }).subscribe();
  }
}
