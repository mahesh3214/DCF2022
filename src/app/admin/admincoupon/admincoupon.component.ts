import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-admincoupon',
  templateUrl: './admincoupon.component.html',
  styleUrls: ['./admincoupon.component.css']
})
export class AdmincouponComponent implements OnInit {

  couponslist: Array<Coupon>=[];




  constructor(private couponService: CouponsService) { }

  ngOnInit(): void {
    this.couponService.getCoupons().subscribe(data=>
      {
        this.couponslist= data;
      })
  }
 

}
