import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private feature: FeaturesService) {}
  message: string = '';
  isSelectAll = false;
  children: any[] = [];
  text: string = '';
  model: any = [];
  arrayList: any = [
    {
      id: 1,
      name: 'Phần tử đầu tiên',
    },
    {
      id: 2,
      name: 'Phần tử thứ hai',
    },
    {
      id: 3,
      name: 'Phần tử thứ ba',
    },
    {
      id: 4,
      name: 'Phần tử thứ bốn',
    },
    {
      id: 5,
      name: 'Phần tử thứ 5',
    },
    // {
    //   id:5,
    //   name:'Phần tử thứ 5'
    // }
  ];


  commons = {
    categoryName: '',
    description: '',
    categoryCode: '',
  };
  selectALl(event: any) {
    console.log(event);

    if (event) {
      for (let item of this.arrayList) {
        item.isSelected = true;
        this.isSelectAll = true;
        this.model.push({ id: item.id, name: item.name });
        this.model = this.getUniqueListBy(this.model, 'id');
      }
    } else {
      for (let item of this.arrayList) {
        item.isSelected = false;
        this.isSelectAll = false;
        this.model = [];
      }
    }
    console.log(this.model);
  }
  selected(event: any, item: any) {
    if (event) {
      this.model.push(item);
    } else {
      this.model = this.model.filter((x: any) => x !== item);
    }
    console.log(this.model);
  }

  addLine() {
    const children = {
      name: '',
      code: '',
      orderNum: 0,
      description: '',
    };
    this.children.push(children);
  }
  deleteLine(item: any) {
    this.children = this.children.filter((x) => x !== item);
  }
  save() {
    const data = {
      categoryName: this.commons.categoryName,
      description: this.commons.description,
      categoryCode: this.commons.categoryCode,
      children: this.children,
    };
    this.feature.addCommons(data).subscribe({
      next: (res) => {
        console.log(res);

        alert('succes');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    const map = new Map();
    map.set('firstName', 'Luke');
    map.set('lastName', 'Skywalker');
    map.set('occupation', 'Jedi Knight');
    //let unique:any = [];
    const data = this.getUniqueListBy(this.arrayList, 'name');

    console.log(map);
  }
  getUniqueListBy(arr: [], key: string) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  currentIndex = 0;
  disabled: boolean = false;

  chuyenMang() {
    this.currentIndex++;
    if (this.currentIndex < this.arrayList.length - 1) {
      // Hiển thị phần tử tiếp theo
      this.arrayList[this.currentIndex].name;
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  submit() {
    console.log(this.text);
  }
}
