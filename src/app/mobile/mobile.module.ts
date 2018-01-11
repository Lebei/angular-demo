import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodService } from './food.service';
import { MobileRoutingModule } from './mobile-routing.module';
import { LoginComponent } from './login.component';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';
import { DetailComponent } from './detail.component';
import { PreviewimgComponent } from './previewimg.component';
import { PageComponent } from './page/page.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MobileRoutingModule
  ],
  declarations: [
    LoginComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DetailComponent,
    PreviewimgComponent,
    PageComponent
  ],
  providers: [ FoodService ],
})
export class MobileModule {}
