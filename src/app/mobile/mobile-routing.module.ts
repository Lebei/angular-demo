import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';
import { DetailComponent } from './detail.component';

const mobileRoutes: Routes = [
  { path: 'mobile/login',  component: LoginComponent },
  { path: 'mobile/list', component: ListComponent },
  { path: 'mobile/add', component: AddComponent },
  { path: 'mobile/edit/:id', component: EditComponent },
  { path: 'mobile/detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(mobileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MobileRoutingModule { }
