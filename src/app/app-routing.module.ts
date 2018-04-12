import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';


export const ROUTES: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }