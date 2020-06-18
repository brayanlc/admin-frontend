import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './pages/user-list/user-list.component';
import {RolGuard} from '../../core/guards/rol.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [RolGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
