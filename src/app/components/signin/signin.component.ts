import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: any = {};
  errorMessage: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }
  // login() {

  //   console.log(this.model);

  // }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      console.log('Loggedin successfully');
    }, error => {
      console.log('Logged in fail');
    });
    
  }

}
