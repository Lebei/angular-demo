import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckRoutingModule } from './check-routing.module';
import { CheckListComponent } from './check-list.component';
import { SampleComponent } from './sample.component';
import { ObjectionComponent } from './objection.component';
import { TaskUploadComponent } from './task-upload.component';
import { TaskReachComponent } from './task-reach.component';
import { FileComponent } from './file.component';
import { EntrustComponent } from './entrust.component';
import { ReportUploadComponent } from './report-upload.component';
import { ReportHandleComponent } from './report-handle.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckRoutingModule
  ],
  declarations: [
    CheckListComponent,
    SampleComponent,
    ObjectionComponent,
    TaskUploadComponent,
    TaskReachComponent,
    FileComponent,
    EntrustComponent,
    ReportUploadComponent,
    ReportHandleComponent,
  ]
})
export class CheckModule {}
