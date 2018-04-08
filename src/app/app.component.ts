import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Person} from './person';
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jsonDataField = '';
  public listOfPerson  = new  Array();
  public progressShow: Boolean = false;
   persons: Person[] ;

  constructor(private uploadservice: UploadService ) {
  }



  onSubmit() {
    console.log(this.jsonDataField);
 if ( this.jsonDataField !== '') {
   this.progressShow = true;
   this.uploadservice.uploadJsonData('/person/details' , this.jsonDataField).subscribe(data => {
     // Via this API, you get access to the raw event stream.
     // Look for upload progress events.
       console.log(data.body);
       this.listOfPerson = data.body;
       console.log(this.listOfPerson );

       this.progressShow = false;
       this.jsonDataField = '';
     }
 , error => {
       this.progressShow = false;
       console.log('connection error' + error );
     }


     );

 }

 }



}
