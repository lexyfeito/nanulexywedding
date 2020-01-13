import { NgModule } from '@angular/core';
import { WeddingComponent } from './wedding.component';
import {AppCommonModule} from '../app-common.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [WeddingComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '', component: WeddingComponent
      }
    ])
  ]
})
export class WeddingModule { }
