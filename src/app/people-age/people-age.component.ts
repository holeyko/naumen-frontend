import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-people-age',
  templateUrl: './people-age.component.html',
  styleUrls: ['./people-age.component.css']
})
export class PeopleAgeComponent {
  personName: string = ''
  responseData: string = ''

  constructor(private http: HttpClient) {}

  getAge() {
    this.http.get('http://localhost:8090/people/age?personName=' + this.personName).subscribe(response => {
        this.responseData = response.toString();
      }
    );
  }
}
