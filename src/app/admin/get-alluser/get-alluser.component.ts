import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RegisterUser } from 'src/app/models/registerUser.model';

import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-alluser',
  templateUrl: './get-alluser.component.html',
  styleUrls: ['./get-alluser.component.css']
})
export class GetAlluserComponent implements OnInit {

  faUser = faUserCircle;
  userList:Array<RegisterUser>=[];
  constructor(private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
     this.getAllUsers();
        
      } 
      getAllUsers(){
      this.adminService.getAllUsers().subscribe(data=>{
        this.userList=data;
        console.log(this.userList);}, err => {
        console.log(err);
      });
    }

  
  deleteUser(user: RegisterUser) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteUser(user.id).subscribe(
          (data) => {
            console.log(data);
            this.getAllUsers();
            if (data != null) {
              Swal.fire('Deleted!', 'User has been deleted.', 'success');
            }
          },
          (err) => {
            Swal.fire("successfully deleted");
            console.log(err);
            return;
          }
        );
      }
    });
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}





