import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNavbarComponent } from './nav-navbar.component';

describe('NavNavbarComponent', () => {
  let component: NavNavbarComponent;
  let fixture: ComponentFixture<NavNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
