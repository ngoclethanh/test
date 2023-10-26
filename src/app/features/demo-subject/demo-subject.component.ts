import { Component } from '@angular/core';
import { FeaturesService } from '../features.service';
import { debounceTime,switchMap, } from 'rxjs';
import { FormControl } from '@angular/forms';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-demo-subject',
  templateUrl: './demo-subject.component.html',
  styleUrls: ['./demo-subject.component.scss'],
  providers: [FeaturesService],
})
export class DemoSubjectComponent {
  searchInput = new FormControl();
  searchResults = [
    {
      id: 1,
      name: 'html/css',
    },
    {
      id: 2,
      name: 'c#',
    },
    {
      id: 3,
      name: 'javaScript',
    },
    {
      id: 4,
      name: 'NodeJS',
    },
    {
      id: 5,
      name: 'Angular',
    },
    {
      id: 6,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'PHP',
    },
  ];
  constructor(private featureService: FeaturesService) {
    let value = [];
    for (const item of this.searchResults) {
      value.push(item.id);
    }
    console.log([...new Set(value)]);

    this.getData();
    this.totalArray();
    let arr = [...new Map(this.searchResults.map((x) => [x.id, x]))];

    console.log(arr);
  }
  text: string = '';
  clickItem() {
    this.featureService.setData(this.text);
  }
  create(acc: number, current: any) {
    return acc + current.id;
  }

  totalArray() {
    let total = this.searchResults.reduce((acc: number, curentValue: any) => {
      //lần lặp đầu tiên không lấy curentvalue nên giá trị acc = initialValue = 0 ,đến lặp lần 2 => initial + current từ lần lặp 1 ,lặp lần 3 =>  initial + current từ lần lặp 2
      let data = acc + curentValue.id;
      return data;
    }, 0);
    let total2 = 0;
    for (const iterator of this.searchResults) {
      total2 = total2 + iterator.id;
    }
    console.log('reduce =', total);
    console.log('for =', total2);
  }

  getData() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query: string) =>
          this.searchResults.filter((x) => x.name === query)
        )
      )
      .subscribe((results: any) => {
        console.log(results);

        // this.searchResults = [results];
      });
  }
  getBlob() {
    var mystring = 'Hello World!';
    var myblob = new Blob([mystring], {
      type: 'text/plain',
    });
    // fetch(outurl)
    //   .then((res) => res.text())
    //   .then((data) => {
    //     console.log(data);
    //   });
    var reader = new FileReader();
    reader.readAsBinaryString(myblob)
    reader.onload =  () => {
      console.log(reader.result);
    };
   
     
  }
}
