import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown.component';
import {AppCommonModule} from '../app-common.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [CountdownComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '', component: CountdownComponent
      }
    ])
  ]
})
export class CountdownModule { }
