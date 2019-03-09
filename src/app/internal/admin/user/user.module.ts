import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserViewComponent } from './user-view/user-view.component';
import { CoreModule } from '../../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';
import { InternalCoreModule } from '../../core/internal-core.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatTabsModule,
      MatMenuModule,
      MatButtonModule,
      CoreModule,
      InternalCoreModule
  ],
  declarations: [
      UserListComponent,
      UserMenuComponent,
      UserTableComponent,
      UserViewComponent,
      UserAddComponent,
      UserEditComponent
  ],
  exports: [
      UserListComponent,
      UserMenuComponent,
      UserTableComponent,
      UserViewComponent
  ],
  entryComponents: [
      UserViewComponent,
      UserEditComponent,
      UserAddComponent
  ]
})
export class UserModule { }
