import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userEmail': new FormControl(null, [Validators.required, Validators.email]),
      'userPassword': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
   console.log(this.loginForm);
  }

}
