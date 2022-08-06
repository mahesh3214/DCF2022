import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registerUser.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestBaseService {

  protected currentUser: RegisterUser = new RegisterUser;

  protected constructor(protected authenticationService: AuthenticationService, protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser);
      
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentUser?.accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }
}