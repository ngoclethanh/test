import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{ path: '', component: FeaturesComponent },

{ path: 'test', component: TestComponent },

];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class FeaturesRoutingModule {}
