import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

import { AdminComponent } from 'src/app/admin/admin.component';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { Role } from 'src/app/models/role.enum';




import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:RegisterUser=new RegisterUser();
  faUser= faUserShield;
  errorMessage: string="";
  roles: string[]=[];
  
  constructor(private authenticationservice: AuthenticationService,private router: Router) { 

  }

  ngOnInit(): void{
   
    if (this.authenticationservice.currentUserValue?.id) {   
      console.log(this.authenticationservice.currentUserValue?.id);
      this.router.navigate(['/users']);
      return;
  }
  }
  login() {
  
this.authenticationservice.login(this.user).subscribe(data => {
  console.log(data);
  
 this.roles=data.roles;

  console.log(this.roles);
  
if(this.roles[0] === 'ROLE_ADMIN'){
  console.log(this.roles[0]);
  
  this.router.navigate(['/admin']);

}
 else if(this.roles[0] === 'ROLE_USER'){

  console.log(this.roles[0]);
    this.router.navigate(['/user']);
}
else {
  this.router.navigate(['/company']);
  this.router.navigate(['/company']);
  console.log(this.roles[0]);
  
}
}, err => {
  this.errorMessage = 'Username or password is incorrect.';
  console.log(err);
})



  }
}