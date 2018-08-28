import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  postForm(url, body) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post(url, body, {headers: headers })
  }

}
