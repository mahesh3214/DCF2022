import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterUser } from '../models/registerUser.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {
  private currentUser: RegisterUser = new RegisterUser;
  roles: string[]=[];
  childRoute: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.currentUser) {
        console.log(route.data['roles'][0]);
        
        if (route.data['roles'][0]?.indexOf(this.currentUser.roles) === -1) {
          console.log(this.currentUser.roles);
          this.router.navigate(['/401']);
          return false;
        }
        return true;
      }
  
      this.router.navigate(['/login']);
      return true;
    }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.currentUser) {
        console.log(childRoute.data['roles'][0]);
        
        if (this.childRoute.data['roles'][0]?.indexOf(this.currentUser.roles) === -1) {
         
          

          this.router.navigate(['/401']);
          return false;
        }
        return true;
      }
  
      this.router.navigate(['/login']);
      return true;
    }
  
}
