import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'wedding', loadChildren: './wedding/wedding.module#WeddingModule'
  },
  {
    path: 'travel', loadChildren: './travel/travel.module#TravelModule'
  },
  {
    path: 'registry', loadChildren: './registry/registry.module#RegistryModule'
  },
  {
    path: 'rspv', loadChildren: './rspv/rspv.module#RspvModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
