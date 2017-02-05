import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  @Input()
  year:number;
  
  nextYear() {
    console.log('next year called')
    return this.year + 1
  }
  constructor() {}

  ionViewDidLoad() {
    console.log('footer component loaded');
  }

}
