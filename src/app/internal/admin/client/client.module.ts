import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { RouterModule } from '@angular/router';
import { InternalCoreModule } from '../../core/internal-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {ClientAddComponent} from './client-add/client-add.component';
import {ClientEditComponent} from './client-edit/client-edit.component';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientListRootComponent} from './client-list-root/client-list-root.component';
import {ClientViewComponent} from './client-view/client-view.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        InternalCoreModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule
    ],
    providers: [
        DatePipe
    ],
    declarations: [
        ClientAddComponent,
        ClientEditComponent,
        ClientListComponent,
        ClientListRootComponent,
        ClientViewComponent
    ],
    entryComponents: [
        ClientViewComponent,
        ClientAddComponent,
        ClientEditComponent
    ]
})
export class ClientModule { }
