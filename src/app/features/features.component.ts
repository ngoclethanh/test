import { Component, OnInit } from '@angular/core';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private service: FeaturesService) {}
  data = { message: 'Hello from parent!' };

  
  items: any[] = [];
  title: string = 'ngọc đz';
  count:any = {
    id:3,
    name:"xxxx"
  }
  author: string = '';
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.service.loadData().subscribe({
      next: (data) => {
        this.items = data;
        console.log(this.items);
      },
    });
  }
  updateData() {
    this.data.message = 'Updated message from parent!';
  }
  postM() {
    const data = {
      title: this.title,
      author: this.author,
    };
    this.service.post(data).subscribe({
      next: () => {
        alert('succes');
        this.loadData();
      },
    });
  }
  random1() {
    this.count = {
      id:Math.random() * 10/100,
      name:new Date().getMilliseconds().toString()
    }
    // this.count.id = Math.random() * 10/100;
    // this.count.name = new Date().getMilliseconds().toString();
  }
  random2() {
    this.count.id = Math.random() * 3;
    this.count.name = new Date().getMilliseconds().toString()
  }
  changeDetection(event: any) {
    this.title = event.value;
  }
}
