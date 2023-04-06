import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { FeaturesService } from '../features.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component implements OnInit {
  message: string = '';
  constructor(private dataService: FeaturesService) {
    this.dataService.getData().subscribe((message) => {
      this.message = message;
    });
  }
  ngOnInit(): void {
    this.loadData();
  }
  items: any[] = [];
  itemList: any[] = [];
  loadData() {
    this.dataService.loadData().subscribe({
      next: (data) => {
        this.items = data.map((x:any)=> {
          x.selected=false;
          return x;
        });
      },
    });
  }
  deletePost() {
    const data = {
      id: this.itemList,
    };
    console.log(data);

    this.dataService.deletePost(data).subscribe({
      next: () => {
        alert('succes');
      },
    });
  }
  onChange(item:any,check:boolean) {
    
      if (check) {
    this.itemList.push(item.id);
      } else {
        this.itemList= this.itemList.filter((x)=>x !== item.id);
      }
    //ssss ngojc 
    console.log(this.itemList);
    ///console.log(' fa code');
    console.log('22222 a');
  }
}
