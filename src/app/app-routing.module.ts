import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/project/project.module').then(m => m.ProjectModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/user/user.module').then(m => m.UserModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
