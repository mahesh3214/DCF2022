import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddCouponAdminComponent } from './admin/add-coupon-admin/add-coupon-admin.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AdmincouponComponent } from './admin/admincoupon/admincoupon.component';
import { GetAdmindetailsComponent } from './admin/get-admindetails/get-admindetails.component';
import { GetAlluserComponent } from './admin/get-alluser/get-alluser.component';
import { GetbyroleComponent } from './admin/getbyrole/getbyrole.component';
import { AddcoupomcompanyComponent } from './company/addcoupomcompany/addcoupomcompany.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CompanyComponent } from './company/company.component';
import { GetcouponsCComponent } from './company/getcoupons-c/getcoupons-c.component';
import { UpdatecompanyComponent } from './company/updatecompany/updatecompany.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { GetuserDetailsComponent } from './user-function/getuser-details/getuser-details.component';
import { UpdateCustomerComponent } from './user-function/updatecustomer/updatecustomer.component';

import { UserComponent } from './user-function/user.component';
import { UsergetCouponsComponent } from './user-function/userget-coupons/userget-coupons.component';

const routes: Routes = [
  {path:"",redirectTo: "home",pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"user",component: UserComponent,
 canActivate:[AuthGuard],data:{roles:["ROLE_USER"]},
children:[{
  path:"get",component: UsergetCouponsComponent},
  {path:"profile", component: GetuserDetailsComponent
},{
  path:"update/userdetails.id" ,component:UpdateCustomerComponent
}]
},

  {path: "admin", component: AdminComponent,
  canActivate: [AuthGuard],
  data:{roles:['ROLE_ADMIN']},
  children:[{
    path:"get",component: AdmincouponComponent},
    {path:"allusers",component: GetAlluserComponent
  },{
    path:"byroles",component: GetbyroleComponent
  },{
    path:"profile",component:GetAdmindetailsComponent
  },{
    path:"addusers",component:AddUserComponent
  },{
    path:"addcoupon",component:AddCouponAdminComponent
  }]


},
  {path:"company",component: CompanyComponent,
  canActivate: [AuthGuard],
   data:{roles:['ROLE_COMPANY']},
   children:[{
     path:"getcoupon",component: GetcouponsCComponent
   },{
     path:"profile",component: CompanyDetailsComponent
   },{
     path:"add",component: AddcoupomcompanyComponent
   },{
    path:"update/companydetails.id" ,component:UpdatecompanyComponent
  }]
  },
  {path: "404", component: NotFoundComponent},
  {path:"401",component: UnauthorizedComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { 
constructor(private router: Router){
  this.router.errorHandler=(error:any)=>{
    this.router.navigate(["/404"]);

  }
}


}
