import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RegisterUser } from 'src/app/models/registerUser.model';
import { SignupRequest } from 'src/app/models/signup.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getbyrole',
  templateUrl: './getbyrole.component.html',
  styleUrls: ['./getbyrole.component.css']
})
export class GetbyroleComponent implements OnInit {

  faUser = faUserCircle;
  role="";
  userList:Array<RegisterUser>=[]


  roles=["ROLE_ADMIN","ROLE_USER","ROLE_COMPANY"]
 
  roleHasError=true;
  




  user: SignupRequest = new SignupRequest();
  errorMessage: string = "";

  validateRole(value:string)
  {
    if(value==="default")
    {
      this.roleHasError=true;
    }
    else
    {
      this.roleHasError=false
    }
  }
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
      
  }

  register()
  {

    this.adminService.getUsersonRole(this.user.roles).subscribe(data=>{
      this.userList=data
      console.log(this.userList);
      
    }, err => {
      console.log(err);
    })
  }

}