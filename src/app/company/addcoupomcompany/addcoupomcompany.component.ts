import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcoupomcompany',
  templateUrl: './addcoupomcompany.component.html',
  styleUrls: ['./addcoupomcompany.component.css']
})
export class AddcoupomcompanyComponent implements OnInit {


  coupon: Coupon=new Coupon();
err:string="";

  constructor(private companyservice: CompanyService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

   register() {
    
    this.companyservice.addCoupon(this.coupon).subscribe(data => {
      this.coupon=data;
      console.log(this.coupon);
      Swal.fire("Coupon Added Successfully")
     this.router.navigate(['/company'])
     }, err => {
      if (err?.status === 400) {
       Swal.fire('Coupon Code already exist.');
      } else {
        Swal.fire('Unexpected error occurred. Error is: ' + err?.errorMessage);
      console.log(err);
     }
   })



   }
  



   }


