import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngMatDialogComponent } from './blogs/ang-mat-dialog/ang-mat-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { TestProductComponent } from './test-product-component/test-product.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AngMatDialogComponent,
    TestDialogComponent,
    TestProductComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
