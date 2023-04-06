import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';

import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [FeaturesComponent, TestComponent, Test1Component],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class FeaturesModule { }
