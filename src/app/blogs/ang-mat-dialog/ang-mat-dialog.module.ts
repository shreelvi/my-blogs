import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngMatDialogComponent } from './ang-mat-dialog.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes = [
  { path: '', component: AngMatDialogComponent }
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
export class AngMatDialogModule { }