import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-one',
  templateUrl: './change-detection-one.component.html',
  styleUrls: ['./change-detection-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,//angular chỉ kiểm tra component đó và component con của nó,mà không kiểm tra,nó sẽ không kiểm tra toàn bộ tree component,điều này làm giảm số lần kiểm tra thay đổi
  //Immutable (Không thay đổi):string.number,boolen : giá trị của nó không thể thay đổi sau khi đã được tạo. Khi bạn cố gắng thay đổi giá trị, thì thực tế bạn tạo ra một bản sao mới của giá trị ban đầu.
  //Mutable (Có thể thay đổi):obj,array :  giá trị của nó có thể thay đổi trực tiếp, mà không cần tạo một bản sao mới.
})
export class ChangeDetectionOneComponent implements OnInit{
  @Input() text = '';
  @Input() count :any ;
  @Input() childData!: { message: string };
  array =[{name:"ngọc"}];
  index:number = 1;

  ngOnInit(): void {
    
  }
  addItem(){
          this.array.push({name:'v'})
  }

}
