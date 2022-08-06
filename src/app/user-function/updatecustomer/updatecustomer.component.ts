import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupRequest } from 'src/app/models/signup.model';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
 user: SignupRequest=new SignupRequest();
 id:string="";
 errorMessage="";
  constructor(private userservice: UserserviceService, private route: ActivatedRoute,private router:Router, private authenticationservice: AuthenticationService) { 

  }

  ngOnInit(): void {

   this.authenticationservice.currentUser.subscribe(data=>{
     this.id=data.id;
     console.log(this.id);
     
   });
      
  this.userservice.getuserdetails(this.id).subscribe(data=>{
    this.user=data;
   console.log(this.user.roles[0]);
    
        console.log(data);
        
  });
  }
updatecustomer(){
  this.userservice.updateCustomer(this.user).subscribe(data=>
    {
      console.log(data);
      this.router.navigate(["/user"]);
    })
}




}
  

