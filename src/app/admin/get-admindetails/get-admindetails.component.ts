import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-get-admindetails',
  templateUrl: './get-admindetails.component.html',
  styleUrls: ['./get-admindetails.component.css']
})
export class GetAdmindetailsComponent implements OnInit {

 admindetails:RegisterUser=new RegisterUser();
 
  constructor(private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
this.authenticationservice.currentUser.subscribe(data=>{
    this.admindetails=data;
}
);


  }

}