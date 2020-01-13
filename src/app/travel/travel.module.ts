import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import {AppCommonModule} from '../app-common.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TravelComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '', component: TravelComponent
      }
    ])
  ]
})
export class TravelModule { }
