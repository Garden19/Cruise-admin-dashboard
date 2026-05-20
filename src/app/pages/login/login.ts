import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginForm } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  onSubmit() {
    const loginData: LoginForm = {
      userName: this.loginForm.value.userName ?? '',
      password: this.loginForm.value.password ?? ''
    };

    if(loginData.userName === 'admin' && loginData.password === 'password123') {
      this.router.navigate(['/dashboard'])
    } else {
      alert('Wrong username or password, please try again.')
    }
  }
}
