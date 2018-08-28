import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {UserProfile} from '../userprofile';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.css']
})
export class PostajobComponent implements OnInit {
  jobDetails: FormGroup = new FormGroup({
    title:new FormControl(),
    developer:new FormControl(),
    tester:new FormControl(),
    dba:new FormControl(),
    companyName:new FormControl(),
    location:new FormControl(),
    ctc:new FormControl(),
    experience:new FormControl(),
    email:new FormControl(),
    referralSub:new FormControl()
  });
  ngOnInit() {
    $('input').floatlabel({labelEndTop:-20});
    $('select').floatlabel({labelEndTop:-20});
  }
  constructor(private http: HttpClient, private router: Router) { }

  saveJobDetails(jobDetails) {
    this.http.post('http://localhost:8090/jobDetails', this.jobDetails.value)
      .subscribe(res => {
          this.router.navigate(['/referraljobs', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
