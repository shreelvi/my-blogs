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
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerDialogComponent } from './progress-spinner-dialog/progress-spinner-dialog.component';
import { AngDirectiveComponent } from './blogs/ang-directive/ang-directive.component';
import { FooterComponent } from './footer/footer.component';
import { AutoFocusDirective } from './auto-focus.directive';
import { SuperWifiArticleComponent } from './blogs/super-wifi-article/super-wifi-article.component';
import { DisqusModule } from 'ngx-disqus';
import { AngTestJestComponent } from './blogs/ang-test-jest/ang-test-jest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AngMatDialogComponent,
    TestDialogComponent,
    TestProductComponent,
    ProgressSpinnerDialogComponent,
    AngDirectiveComponent,
    FooterComponent,
    AutoFocusDirective,
    SuperWifiArticleComponent,
    AngTestJestComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DisqusModule.forRoot('elvis-tech-blogs')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
