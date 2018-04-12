import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LayRoutingModule } from './layout-routing.module'
import { DrawerModule } from '../drawer/drawer.module';

import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    LayRoutingModule,
    DrawerModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }