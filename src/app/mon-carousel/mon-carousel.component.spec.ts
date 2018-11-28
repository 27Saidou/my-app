import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCarouselComponent } from './mon-carousel.component';

describe('MonCarouselComponent', () => {
  let component: MonCarouselComponent;
  let fixture: ComponentFixture<MonCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
