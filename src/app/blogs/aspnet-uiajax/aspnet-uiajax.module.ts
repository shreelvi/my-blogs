import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AspNetUIAjaxComponent } from './aspnet-uiajax.component';

export const routes = [
  { path: '', component: AspNetUIAjaxComponent }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      AngularMaterialModule,
      FlexLayoutModule,
      RouterModule.forChild(routes)
  ]
})
export class AspNetUiAjaxModule { }