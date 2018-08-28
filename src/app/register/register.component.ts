import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {UserProfile} from '../userprofile';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 userdata:UserProfile;
  userform: FormGroup = new FormGroup({
    agreement:new FormControl(),
    city:new FormControl(),
    country:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    expArea:new FormControl(),
    firstName:new FormControl(),
    gender:new FormControl(),
    lastName:new FormControl(),
    mobile:new FormControl(),
    totalExp:new FormControl()
  });
  ngOnInit() {
    $('input').floatlabel({labelEndTop:-20});
    $('select').floatlabel({labelEndTop:-20});
  }
  constructor(private http: HttpClient, private router: Router) { }

  saveUser(userform) {
    this.http.post('http://localhost:8090/contacts', this.userform.value)
      .subscribe(res => {
          localStorage.setItem('response',JSON.stringify(res));
          this.router.navigate(['/login', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }

 /* myVal(ff) {
    this.userdata=this.userform.value;
    console.log(this.userdata);
    localStorage.setItem("obj", JSON.stringify(this.userform.value));    
  }*/
}
