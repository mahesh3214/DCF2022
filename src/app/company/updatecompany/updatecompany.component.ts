import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { SignupRequest } from 'src/app/models/signup.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
  user: SignupRequest=new SignupRequest();
  id:string="";
  errorMessage="";
  constructor(private companyservice:CompanyService,private router:Router, private authenticationservice: AuthenticationService) { }

  ngOnInit(): void {
 this.authenticationservice.currentUser.subscribe(data=>{
   this.id=data.id;
   console.log(this.id);
   
 });

this.companyservice.getcompanydetails(this.id).subscribe(data=>{
  this.user=data;
  console.log(this.id);
  
});
}
  updatecompany(){
    this.companyservice.updatecompany(this.user).subscribe(data=>
      {
        console.log(data);
        Swal.fire("updated Added Successfully")
        this.router.navigate(["/company"]);
      });
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
