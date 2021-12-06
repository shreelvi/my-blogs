import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperWifiArticleComponent } from './super-wifi-article.component';

export const routes = [
  { path: '', component: SuperWifiArticleComponent }
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
export class SuperWifiArticleModule { }