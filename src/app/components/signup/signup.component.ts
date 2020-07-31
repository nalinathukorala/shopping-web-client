import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Register } from '../../Register';
import { error } from 'protractor';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  // data = false;
  // UserForm: any;
  // massage: string;

  constructor(private loginService: LoginService, private notificationService: NotificationService) { }

  ngOnInit() {

  }

  //   register() {
  //   console.log(this.model);
  // }

  register() {
    this.loginService.register(this.model).
      subscribe(next => {
        console.log('Registered successfully');
        this.notificationService.showSuccess("dasda","");
      },
      error => {
        console.log('Register failed', error);
        this.notificationService.showError("dasda","");
      });
  }

}
