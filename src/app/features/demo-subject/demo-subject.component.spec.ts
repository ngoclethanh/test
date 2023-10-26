import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSubjectComponent } from './demo-subject.component';

describe('DemoSubjectComponent', () => {
  let component: DemoSubjectComponent;
  let fixture: ComponentFixture<DemoSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
