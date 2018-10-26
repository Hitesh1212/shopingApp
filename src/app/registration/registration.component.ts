import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.formBuilder.group ({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userMobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10) ]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      userAddress: ['', Validators.required]
    });
  }
    get f() {
      return this.registrationForm.controls;
    }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
        return;
    }
   console.log(this.registrationForm.value);
  }

}
