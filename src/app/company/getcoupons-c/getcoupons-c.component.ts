import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-getcoupons-c',
  templateUrl: './getcoupons-c.component.html',
  styleUrls: ['./getcoupons-c.component.css']
})
export class GetcouponsCComponent implements OnInit {
  coupon: Array<Coupon>=[];
  constructor(private companyService: CompanyService) { }
  ngOnInit(): void {
    this.companyService.getCoupons().subscribe(data=>{
      this.coupon=data;
      console.log(this.coupon);
      
    })
  }

}
