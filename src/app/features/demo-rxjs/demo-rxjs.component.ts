import { Component, OnDestroy } from '@angular/core';
import { FeaturesService } from '../features.service';
import { Subject, Subscription, interval, mergeMap, scan } from 'rxjs';

@Component({
  selector: 'app-demo-rxjs',
  templateUrl: './demo-rxjs.component.html',
  styleUrls: ['./demo-rxjs.component.scss'],
})
export class DemoRxjsComponent implements OnDestroy {
  message: string = '';
  subscription = Subscription.EMPTY; // lưu lại subscription
  constructor(private featureService: FeaturesService) {
    // this.featureService
    //   .getData()
    //   .pipe(
    //     mergeMap((total) =>
    //       interval(1000).pipe(scan((acc, value) => acc + value, total))
    //     )
    //   )
    //   .subscribe((msg) => {
    //     this.message = msg;
    //     console.log(this.message);
    //   });

    // this.featureService.getData().subscribe((message) => {
    //   this.message.push(message);
    //   console.log(this.message);

    // });
  }
  un() {
    this.subscription.unsubscribe(); // call unsubscribe khi component OnDestroy
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // call unsubscribe khi component OnDestroy
  }
}
