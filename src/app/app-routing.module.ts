import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'nav-bar', loadChildren: () => import('./nav-bar/nav-bar.module').then(m => m.NavBarModule) },
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'blog1', loadChildren: () => import('./blogs/ang-mat-dialog/ang-mat-dialog.module').then(m => m.AngMatDialogModule) },
  { path: 'angular-directive-blog', loadChildren: () => import('./blogs/ang-directive/ang-directive.module').then(m => m.AngDirectiveModule) },
  { path: 'blog3', loadChildren: () => import('./blogs/super-wifi-article/super-wifi-article.module').then(m => m.SuperWifiArticleModule) },
  { path: 'blog4', loadChildren: () => import('./blogs/ang-test-jest/ang-test-jest.module').then(m => m.AngTestJestModule) },
  { path: 'test-table', loadChildren: () => import('./test-product-component/test-product.module').then(m => m.TestProductModule) },
  { path: 'asp-net-auth', loadChildren: () => import('./blogs/asp-net-auth-identity/asp-net-auth-identity.module').then(m => m.AspNetAuthIdentityModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
