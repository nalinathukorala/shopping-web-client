import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.API_URL;
  temp_url = 'http://localhost:4076/api/auth/'

  constructor(private http: HttpClient) {
  }
  
  login(model: any) {
    return this.http.post(this.temp_url + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if(user) {
          localStorage.setItem('token',user.token);
          // console.log(user.token);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl+'register', model);
  }
 
}
