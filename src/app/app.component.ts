import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
  
    // for (const key in this.array) {
    //   console.log(this.array[key]);
    // }
    // for (const [i,iterator] of this.array.entries()) {
    //   console.log(iterator,i);
    // }
    // for(let i=0;i<this.array?.length;i++){
    //   this.array[i]
    //   console.log(this.array[i],i);
    // }
    const index = this.numberArr.findIndex((x) => x > 2);
    let item = this.array.indexOf('frace');
    console.log(this.stringStr.split(','));
  }

  title = 'demo';

  stringStr='me ,th ,mesz, sssss'

  array = ['soviet union', 'frace', 'england', 'vietnam', 'japanese'];
  numberArr = [3, 2, 4, 6, 5];
  arrObj = [
    { num: 1, country: 'US' },
    { num: 10, country: 'UK' },
    { num: 11, country: 'VI' },
  ];
}
