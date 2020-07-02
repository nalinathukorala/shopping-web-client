import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Register } from '../../Register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  employeeForm: FormGroup;
  data = false;
  UserForm: any;
  massage: string;

  constructor(private formbulider: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.employeeForm = this.formbulider.group({
      UserName: ['', [Validators.required]],
      LoginName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });
  }

  onFormSubmit(form: FormGroup) {
    const user = this.employeeForm.value;
    this.Createemployee(user);
    console.log(user);
    
  }
  Createemployee(register: Register) {
    this.loginService.CreateUser(register).subscribe(
      () => {
        this.data = true;
        this.massage = 'Data saved Successfully';
        this.employeeForm.reset();
      });
  }

}
