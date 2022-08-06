import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCouponAdminComponent } from './add-coupon-admin.component';

describe('AddCouponAdminComponent', () => {
  let component: AddCouponAdminComponent;
  let fixture: ComponentFixture<AddCouponAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCouponAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCouponAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
