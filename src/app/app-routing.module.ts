import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { CheckListComponent } from './check/check-list.component';
import { ResourceListComponent } from './resource/resource-list.component';

const appRoutes: Routes = [
  { path: 'check', component: CheckListComponent },
  { path: 'resource', component: ResourceListComponent },
  { path: '',   redirectTo: '/mobile/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
