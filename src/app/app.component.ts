//import { JsonpClientBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from './models/registerUser.model';
import { Role } from './models/role.enum';
//import { ERole } from './models/role.enum';
//import { Role } from './models/Role';


import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DCF2022';
  currentUser: RegisterUser = new RegisterUser;
  roles: string[]=[];
  
  
 

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
     
      
    });
  }

   isAdmin() {

    return  this.currentUser?.roles[0] === 'ROLE_ADMIN';

  }
  isCustomer(){
    return this.currentUser?.roles[0] === 'ROLE_USER';
  }
  isCompany(){
    return this.currentUser?.roles[0] === 'ROLE_COMPANY';
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }} 
