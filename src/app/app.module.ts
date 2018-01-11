import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ResourceModule } from './resource/resource.module';
import { CheckModule } from './check/check.module';
import { MobileModule } from './mobile/mobile.module';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule,
    CheckModule,
    MobileModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
