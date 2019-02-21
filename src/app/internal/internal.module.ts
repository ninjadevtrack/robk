import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InternalCoreModule } from './core/internal-core.module';
import { AdminModule } from './admin/admin.module';
import { InternalEntryComponent } from './internal-entry.component';
import { ProfileComponent } from './common/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { InternalCommonModule } from './common/internal-common.module';
import {GraphWatchListComponent} from "./common/graph-watch-list/graph-watch-list.component";

const routes: Routes = [
    { path: 'i', component: InternalEntryComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'admin', component: AdminComponent,
                children: [
                    { path: '', component: UserListComponent },
                ]
            },
            { path: 'gwl', component: GraphWatchListComponent }
        ]
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      InternalCommonModule,
      InternalCoreModule,
      AdminModule
  ],
  declarations: [
      InternalEntryComponent
  ],
  exports: [
      InternalEntryComponent,
      InternalCommonModule,
      InternalCoreModule,
      AdminModule
  ]
})
export class InternalModule { }
