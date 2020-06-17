import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentLayoutComponent} from './content-layout/content-layout.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ContentLayoutComponent, AuthLayoutComponent, ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
