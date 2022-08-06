import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyroleComponent } from './getbyrole.component';

describe('GetbyroleComponent', () => {
  let component: GetbyroleComponent;
  let fixture: ComponentFixture<GetbyroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
