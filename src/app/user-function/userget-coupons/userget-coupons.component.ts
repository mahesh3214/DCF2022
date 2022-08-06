import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userget-coupons',
  templateUrl: './userget-coupons.component.html',
  styleUrls: ['./userget-coupons.component.css']
})
export class UsergetCouponsComponent implements OnInit {
coupon: Array<Coupon>=[];

err:string="";
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
this.userservice.getAllCoupons().subscribe(data=>{
  this.coupon=data;
  console.log(this.coupon);
  

    
});  

}

}
