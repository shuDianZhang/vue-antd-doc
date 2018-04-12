import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }