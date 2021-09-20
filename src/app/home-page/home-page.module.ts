import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes = [
  { path: '', component: HomePageComponent }
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
export class HomePageModule { }