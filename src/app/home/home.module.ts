import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import {AppCommonModule} from '../app-common.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
