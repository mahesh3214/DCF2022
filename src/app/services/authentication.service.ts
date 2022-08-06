import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../models/registerUser.model';
import { SignupRequest } from '../models/signup.model';



const API_URL=`${environment.BASE_URL}/api/auth/`


@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

  public currentUser: Observable<RegisterUser> ;
  public currentUserSubject: BehaviorSubject<RegisterUser> ;

  constructor(private http: HttpClient) { 
let storageUser;
const storageUserAsStr= localStorage.getItem('currentUser');
if(storageUserAsStr){
  storageUser=JSON.parse(storageUserAsStr);
}
this.currentUserSubject= new BehaviorSubject<RegisterUser>(storageUser);
this.currentUser=this.currentUserSubject.asObservable();

  }
public get currentUserValue(): RegisterUser{
  return this.currentUserSubject.value;
}
login(user:RegisterUser): Observable<any>{
  return this.http.post<any>(API_URL+'sign-in',user).pipe(
    map(response=>{
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response)); 
        this.currentUserSubject.next(response);
        console.log(response);
        
      }
      return response;
    })
  );
}
register(user:SignupRequest): Observable<any>{
  console.log(user);
  
  return this.http.post<any>(API_URL+'sign-up',user);
  
  
  

  
}
logout(){
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(new RegisterUser);
}


}
