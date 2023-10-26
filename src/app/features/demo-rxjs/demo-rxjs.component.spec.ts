import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRxjsComponent } from './demo-rxjs.component';

describe('DemoRxjsComponent', () => {
  let component: DemoRxjsComponent;
  let fixture: ComponentFixture<DemoRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
