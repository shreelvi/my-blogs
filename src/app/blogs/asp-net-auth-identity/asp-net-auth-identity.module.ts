import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AspNetAuthIdentityComponent } from './asp-net-auth-identity.component';


export const routes = [
    { path: '', component: AspNetAuthIdentityComponent }
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
export class AspNetAuthIdentityModule { }