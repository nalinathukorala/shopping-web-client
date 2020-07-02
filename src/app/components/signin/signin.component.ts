import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: any = {};
  errorMessage: string;

  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }

  // login() {
  //   debugger;
  //   this.LoginService.Login(this.model).subscribe(
  //     data => {
  //       debugger;
  //       if (data.Status == "Success") {
  //         this.router.navigate(['/']);
  //         debugger;
  //       }
  //       else {
  //         this.errorMessage = data.Message;
  //       }
  //     },
  //     error => {
  //       this.errorMessage = error.message;
  //     });
  // };

  login(form: NgForm) {
    console.log(form.value);

  }

}
