import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { DrawerComponent } from '../drawer/drawer.component'

const ROUTES: Routes = [
  {
    path: 'component',
    component: LayoutComponent,
    children: [
      { path: 'drawer', component: DrawerComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class LayRoutingModule { }