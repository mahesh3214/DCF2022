import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-coupon-admin',
  templateUrl: './add-coupon-admin.component.html',
  styleUrls: ['./add-coupon-admin.component.css']
})
export class AddCouponAdminComponent implements OnInit {
  coupon: Coupon=new Coupon();
  err:string="";
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
 addCoupon() {
    this.adminservice.addCoupon(this.coupon).subscribe(data => {
      this.coupon=data;
      console.log(this.coupon);
      Swal.fire("Coupon Added Successfully")
     this.router.navigate(['/admin'])
     }, err => {
      if (err?.status === 400) {
       Swal.fire('Coupon Code already exist.');
      } else {
        Swal.fire('Unexpected error occurred. Error is: ' + err?.errorMessage);
      console.log(err);
     }
   });
   }
}
