import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RspvComponent } from './rspv.component';
import {AppCommonModule} from '../app-common.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { RspvSuccessComponent } from './rspv-success/rspv-success.component';



@NgModule({
  declarations: [RspvComponent, RspvSuccessComponent],
  imports: [
    AppCommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: RspvComponent
      }
    ]),
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    RspvSuccessComponent
  ]
})
export class RspvModule { }
