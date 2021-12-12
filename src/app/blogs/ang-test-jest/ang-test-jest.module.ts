import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { AngTestJestComponent } from './ang-test-jest.component';

export const routes = [
    { path: '', component: AngTestJestComponent }
  ];

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
})
export class AngTestJestModule { }
