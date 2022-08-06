import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  faUsers } from '@fortawesome/free-solid-svg-icons';
import { SignupRequest } from 'src/app/models/signup.model';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:SignupRequest=new SignupRequest();
faUser= faUsers;
errorMessage: string="";

  constructor(private authenticationservice: AuthenticationService,private router: Router) { 

  }

  ngOnInit() {
    if(this.authenticationservice.currentUserValue?.id){
      this.router.navigate(['/user']);
      return;
    }
  }
  register(){
    this.authenticationservice.register(this.user).subscribe(data=>{
    console.log(data);
    
this.router.navigate(['/login']);
    },err=>{
      if(err?.status === 400){
        this.errorMessage="error Username or name is already exist"
      }else{
        this.errorMessage="unexxpected error occured. error is :"+err?.errorMessage;
        console.log(err);
        
      }
    }
      );
  }

}
