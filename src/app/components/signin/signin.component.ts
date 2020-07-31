import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: any = {};
  errorMessage: string;

  constructor(private router: Router, private loginService: LoginService, private notificationService: NotificationService) { }

  ngOnInit(): void {

  }
  // login() {

  //   console.log(this.model);
  //   this.notificationService.showSuccess("dasd","dasd");

  // }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      this.notificationService.showSuccess("dasda","");
      console.log('Loggedin successfully');
    }, error => {
      this.notificationService.showError("dasd","dasd");
      console.log('Logged in fail');
    });
    
  }

}
