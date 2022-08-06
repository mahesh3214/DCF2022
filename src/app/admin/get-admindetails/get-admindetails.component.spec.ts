import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmindetailsComponent } from './get-admindetails.component';

describe('GetAdmindetailsComponent', () => {
  let component: GetAdmindetailsComponent;
  let fixture: ComponentFixture<GetAdmindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdmindetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
