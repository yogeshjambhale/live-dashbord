import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password= new FormControl('', Validators.compose([
     Validators.required,
     Validators.minLength(6)
  ]) );

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage(){
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minLength') ? 'Password Must Have 6 Caracters' : '';
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
