import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckListComponent } from './check-list.component';
import { SampleComponent } from './sample.component';
import { ObjectionComponent } from './objection.component';
import { TaskUploadComponent } from './task-upload.component';
import { TaskReachComponent } from './task-reach.component';
import { FileComponent } from './file.component';
import { EntrustComponent } from './entrust.component';
import { ReportUploadComponent } from './report-upload.component';
import { ReportHandleComponent } from './report-handle.component';
const checkRoutes: Routes = [
  { path: 'check',  component: CheckListComponent },
  { path: 'check/sample', component: SampleComponent },
  { path: 'check/objection', component: ObjectionComponent },
  { path: 'check/task-upload', component: TaskUploadComponent },
  { path: 'check/task-reach', component: TaskReachComponent },
  { path: 'check/file', component: FileComponent },
  { path: 'check/entrust', component: EntrustComponent },
  { path: 'check/report-upload', component: ReportUploadComponent },
  { path: 'check/report-handle', component: ReportHandleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(checkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckRoutingModule { }
