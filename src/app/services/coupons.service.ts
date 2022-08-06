import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';
import {Coupon } from 'src/app/models/coupon.model';
import { Observable } from 'rxjs';

const API_URL=`${environment.BASE_URL}/coupon`


@Injectable({
  providedIn: 'root'
})
export class CouponsService extends RequestBaseService {

  constructor(authenticationService: AuthenticationService, http: HttpClient ) {
  super(authenticationService,http)


   }


getCoupons(): Observable<any> {
  console.log({headers: this.getHeaders});
  
  return this.http.get(`${API_URL}/list`,{headers: this.getHeaders});

}
 
addCoupon(coupon: Coupon ): Observable<any>{

return this.http.post(`${API_URL}/add`,coupon,{headers:this.getHeaders});

}

deleteCoupon(coupon:Coupon):Observable<any>{
  return this.http.delete(`${API_URL}/delete/${coupon.id}`,{headers:this.getHeaders});
}


}
