import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detection-two',
  templateUrl: './change-detection-two.component.html',
  styleUrls: ['./change-detection-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,//hệ thống kiểm tra toàn bộ tree component để xác định component nào cần được cập nhật,điều này làm hiệu xuất ứng dụng k tốt
})
export class ChangeDetectionTwoComponent implements OnInit,OnChanges {
  @Input() text = '';
  @Input() count :any ;
  @Input() childData!: { message: string };
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


}
