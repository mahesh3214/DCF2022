import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../models/coupon.model';
import { RegisterUser } from '../models/registerUser.model';
import { SignupRequest } from '../models/signup.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL=`${environment.BASE_URL}/company`
@Injectable({
  providedIn: 'root'
})
export class CompanyService extends RequestBaseService{

  coupon:Array<Coupon> =[];
user: SignupRequest=new SignupRequest();
  constructor(authenticationService: AuthenticationService, http: HttpClient) { 
    super(authenticationService,http)
  }


  getCoupons(): Observable<Coupon[]>{
    console.log({headers: this.getHeaders});
    return this.http.get<Coupon[]>(`${API_URL}/getcoupon`, {headers: this.getHeaders});
  }
  addCoupon(coupon:Coupon):Observable<Coupon>{
    return this.http.post<Coupon>(`${API_URL}/add`,JSON.stringify(coupon),{headers: this.getHeaders});
  }
  getcompanydetails(id:string):Observable<any>{
    return this.http.get(`${API_URL}/getdetails/${id}`,{headers:this.getHeaders})
  }
  updatecompany(user:SignupRequest):Observable<SignupRequest>{
    return this.http.put<SignupRequest>(`${API_URL}/update/${user.id}`,user,{headers: this.getHeaders})
  }



}