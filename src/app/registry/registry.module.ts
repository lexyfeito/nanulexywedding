import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryComponent } from './registry.component';
import {AppCommonModule} from '../app-common.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [RegistryComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '', component: RegistryComponent
      }
    ])
  ]
})
export class RegistryModule { }
