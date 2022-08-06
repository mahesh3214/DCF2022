import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergetCouponsComponent } from './userget-coupons.component';

describe('UsergetCouponsComponent', () => {
  let component: UsergetCouponsComponent;
  let fixture: ComponentFixture<UsergetCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsergetCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergetCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
