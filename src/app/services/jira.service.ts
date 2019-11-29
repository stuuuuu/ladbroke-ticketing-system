import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http: HttpClient) { }


  getAllticketToday(date){
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3001/trs/addTRS/' + date, {headers});
    //return this.http.get('http://localhost:3001/jira/ticketToday/' + alldevs, {headers})
  }

  insertTickets(allDevs){
    let headers = new HttpHeaders();
    return this.http.post<any>('http://localhost:3001/trs/addTRS', allDevs, {headers});

  }

  getAllInfoDevs(date){
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3001/trs/getTRS/' + date, {headers})
  }

  ticketRecords(dev,datestart,dateend){
    console.log(datestart);
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3001/trs/ticketRecord/'+ dev +'/'+ datestart +'/' + dateend , {headers})
  }


}
