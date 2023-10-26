import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { DemoRxjsComponent } from './demo-rxjs/demo-rxjs.component';
import { DemoSubjectComponent } from './demo-subject/demo-subject.component';
import { ChangeDetectionOneComponent } from './change-detection-one/change-detection-one.component';
import { ChangeDetectionTwoComponent } from './change-detection-two/change-detection-two.component';

@NgModule({
  declarations: [FeaturesComponent, TestComponent, Test1Component, DemoRxjsComponent, DemoSubjectComponent, ChangeDetectionOneComponent, ChangeDetectionTwoComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class FeaturesModule { }
