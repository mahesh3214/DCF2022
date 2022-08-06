import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/models/signup.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
errorMessage="";
user:SignupRequest=new SignupRequest();
  constructor(private authenticationservice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.authenticationservice.register(this.user).subscribe(data=>{
    console.log(data);
    Swal.fire("User is Added")
    this.router.navigate(['/admin']);
    }
    , err => {
   if (err?.status === 400) {
    this.errorMessage="error Username or name is already exist"
   } else {
    this.errorMessage="unexxpected error occured. error is :"+err?.errorMessage;
   console.log(err);
    }
  } ); 
  }
}



