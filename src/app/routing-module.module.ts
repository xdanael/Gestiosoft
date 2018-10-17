import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { RouteGuardService} from './route-guard.service';

import {LoginComponent} from './login/login.component';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const  routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
              path: '',
              loadChildren: './layout/admin-layout/admin-layout.module#AdminLayoutModule'
          }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
    exports : [
        RouterModule
    ],
    providers : [RouteGuardService],
  declarations: []
})
export class RoutingModuleModule { }
