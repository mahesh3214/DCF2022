import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { SignupRequest } from 'src/app/models/signup.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-getuser-details',
  templateUrl: './getuser-details.component.html',
  styleUrls: ['./getuser-details.component.css']
})
export class GetuserDetailsComponent implements OnInit {
 id: string='';
 userdetails:RegisterUser=new RegisterUser();
 err:string="";
  constructor(private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
this.authenticationservice.currentUser.subscribe(data=>{
    this.userdetails=data;
    console.log(this.userdetails);
    
    console.log(this.userdetails.id);
    
}
)


  }

}
