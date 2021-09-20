import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'nav-bar', loadChildren: () => import('./nav-bar/nav-bar.module').then(m => m.NavBarModule) },
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'blog1', loadChildren: () => import('./blogs/ang-mat-dialog/ang-mat-dialog.module').then(m => m.AngMatDialogModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
