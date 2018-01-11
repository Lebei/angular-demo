import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResourceListComponent } from './resource-list.component';
import { FoodCateComponent } from './food-cate.component';
import { CheckProjectComponent } from './check-project.component';
import { ResourceRoutingModule } from './resource-routing.module';
import { JudgeStandardComponent } from './judge-standard.component';
import { UserComponent } from './user.component';
import { RoleComponent } from './role.component';
import { ResourceComponent } from './resource.component';
import { LogComponent } from './log.component';
import { DictionaryComponent } from './dictionary.component';
import { OrganizeComponent } from './organize.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResourceRoutingModule
  ],
  declarations: [
    ResourceListComponent,
    FoodCateComponent,
    CheckProjectComponent,
    JudgeStandardComponent,
    UserComponent,
    RoleComponent,
    ResourceComponent,
    LogComponent,
    DictionaryComponent,
    OrganizeComponent
  ]
})
export class ResourceModule {}
