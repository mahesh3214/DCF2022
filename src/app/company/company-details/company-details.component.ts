import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companydetails:RegisterUser=new RegisterUser();
 
  constructor(private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
this.authenticationservice.currentUser.subscribe(data=>{
    this.companydetails=data;
    console.log(this.companydetails);
    console.log(this.companydetails.id);
    
    
}
);


  }

}