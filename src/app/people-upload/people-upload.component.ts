import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-people-upload',
  templateUrl: './people-upload.component.html',
  styleUrls: ['./people-upload.component.css']
})
export class PeopleUploadComponent {
  peopleFile: File | any = null

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.peopleFile = event.target.files[0];
  }

  onUpload() {
    if (this.peopleFile) {
      const fd = new FormData()
      fd.append('peopleFile', this.peopleFile, this.peopleFile.name)
      this.http.post('http://localhost:8090/people/upload', fd)
    }
  }
}
