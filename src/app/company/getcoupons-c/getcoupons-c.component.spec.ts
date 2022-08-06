import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcouponsCComponent } from './getcoupons-c.component';

describe('GetcouponsCComponent', () => {
  let component: GetcouponsCComponent;
  let fixture: ComponentFixture<GetcouponsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcouponsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcouponsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
