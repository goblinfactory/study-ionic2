import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  private _year : number

  get year()  {
    return this._year;
  }

  @Input()
  set year(value) {
    this._year  = value + 1;
  }

  constructor() {}

  ionViewDidLoad() {
    console.log('footer component loaded');
  }

}
