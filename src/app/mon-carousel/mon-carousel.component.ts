import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-carousel',
  templateUrl: './mon-carousel.component.html',
  styleUrls: ['./mon-carousel.component.scss']
})
export class MonCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunction($event){
  alert('hello angular');
  console.log(event);
  }

}
