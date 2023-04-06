import { Component, OnInit } from '@angular/core';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private service:FeaturesService) {}
  items:any[]=[];
  title:string='';
  author:string='';
  ngOnInit(): void {
 
this.loadData();
  }
  loadData(){
    this.service.loadData().subscribe({
      next: (data) =>{
          this.items=data;
          console.log(this.items);
      }
    })
    
    

  }
  postM(){
    const data={
      title:this.title,
      author:this.author
    }
    this.service.post(data).subscribe({
      next:()=>{
        alert('succes');
        this.loadData();
      }
    })
  }
}
