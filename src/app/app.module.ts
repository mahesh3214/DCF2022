import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ErrorComponent } from './error/error.component';
import { GuestComponent } from './guest/guest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './guest/login/login.component';
import { UserComponent } from './user-function/user.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './guest/home/home.component';
import { RegisterComponent } from './guest/register/register.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { UserAreaComponent } from './user-function/user-area/user-area.component';
import { GetuserDetailsComponent } from './user-function/getuser-details/getuser-details.component';
import { FooterComponent } from './footer/footer.component';
import { UsergetCouponsComponent } from './user-function/userget-coupons/userget-coupons.component';
import { AuthGuard } from './guard/auth.guard';
import { UpdateCustomerComponent } from './user-function/updatecustomer/updatecustomer.component';
import { AdmincouponComponent } from './admin/admincoupon/admincoupon.component';
import { GetAlluserComponent } from './admin/get-alluser/get-alluser.component';
import { GetbyroleComponent } from './admin/getbyrole/getbyrole.component';
import { GetcouponsCComponent } from './company/getcoupons-c/getcoupons-c.component';
import { GetAdmindetailsComponent } from './admin/get-admindetails/get-admindetails.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { AddcoupomcompanyComponent } from './company/addcoupomcompany/addcoupomcompany.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UpdatecompanyComponent } from './company/updatecompany/updatecompany.component';
import { AddCouponAdminComponent } from './admin/add-coupon-admin/add-coupon-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CouponsComponent,
    ErrorComponent,
    GuestComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    UnauthorizedComponent,
    UserAreaComponent,
    GetuserDetailsComponent,
    FooterComponent,
    UsergetCouponsComponent,
    UpdateCustomerComponent,
    AdmincouponComponent,
    GetAlluserComponent,
    GetbyroleComponent,
    GetcouponsCComponent,
    GetAdmindetailsComponent,
    CompanyDetailsComponent,
    AddcoupomcompanyComponent,
    AddUserComponent,
    UpdatecompanyComponent,
    AddCouponAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
