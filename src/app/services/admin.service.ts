import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../models/coupon.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL=`${environment.BASE_URL}/admin`
@Injectable({
  providedIn: 'root'
})
export class AdminService extends RequestBaseService {


  constructor(authenticationService: AuthenticationService,http:HttpClient) {
    super(authenticationService,http)
   }

   getAllUsers():Observable<any>{
     return this.http.get<any>(`${API_URL}/list`,{headers:this.getHeaders});
   }
   getUsersonRole(role:string):Observable<any>{
    return this.http.get( API_URL+"/getbyroles/"+role, {headers: this.getHeaders});
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete( `${API_URL}/deleteAdmin/${id}`, {headers: this.getHeaders});
  }
  addCoupon(coupon:Coupon):Observable<Coupon>{
    return this.http.post<Coupon>(`${API_URL}/addCoupon`,JSON.stringify(coupon),{headers: this.getHeaders});
  }


}
