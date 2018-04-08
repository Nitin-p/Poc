import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {AppComponent} from './app.component';
import {Observable} from 'rxjs/Observable';
import {Person} from "./person";



@Injectable()
export class UploadService {


  constructor(private http: HttpClient) {}

  uploadJsonData(url: any, data: any): Observable<any> {
    const req = new HttpRequest('POST',  url, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
   return  this.http.request(req);
  }

  getRequest(url: any): Observable<any> {
    return this.http.get(url);
  }

}
