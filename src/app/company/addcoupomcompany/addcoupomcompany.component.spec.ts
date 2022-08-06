import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoupomcompanyComponent } from './addcoupomcompany.component';

describe('AddcoupomcompanyComponent', () => {
  let component: AddcoupomcompanyComponent;
  let fixture: ComponentFixture<AddcoupomcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoupomcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoupomcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
