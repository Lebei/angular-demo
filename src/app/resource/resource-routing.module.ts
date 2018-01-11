import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceListComponent } from './resource-list.component';
import { FoodCateComponent } from './food-cate.component';
import { CheckProjectComponent } from './check-project.component';
import { JudgeStandardComponent } from './judge-standard.component';
import { UserComponent } from './user.component';
import { RoleComponent } from './role.component';
import { ResourceComponent } from './resource.component';
import { LogComponent } from './log.component';
import { DictionaryComponent } from './dictionary.component';
import { OrganizeComponent } from './organize.component';
const resourceRoutes: Routes = [
  { path: 'resource',  component: ResourceListComponent },
  { path: 'resource/food-cate', component: FoodCateComponent },
  { path: 'resource/check-project', component: CheckProjectComponent },
  { path: 'resource/judge-standard', component: JudgeStandardComponent },
  { path: 'resource/user', component: UserComponent },
  { path: 'resource/role', component: RoleComponent },
  { path: 'resource/resource', component: ResourceComponent },
  { path: 'resource/log', component: LogComponent },
  { path: 'resource/dictionary', component: DictionaryComponent },
  { path: 'resource/organize', component: OrganizeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(resourceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResourceRoutingModule { }
