import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export const routes = [
     
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ]
})
export class NavBarModule { }