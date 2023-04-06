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
  children: any[] = [];

  clickItem() {
    this.feature.setData(this.message);
  }
  commons = {
    categoryName: '',
    description: '',
    categoryCode: '',
  };

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
  ngOnInit(): void {}
}
