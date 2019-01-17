import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { RouterModule } from '@angular/router';
import { InternalCommonModule } from '../../common/internal-common.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {ServiceAddComponent} from './service-add/service-add.component';
import {ServiceEditComponent} from './service-edit/service-edit.component';
import {ServiceListComponent} from './service-list/service-list.component';
import {ServiceListRootComponent} from './service-list-root/service-list-root.component';
import {ServiceViewComponent} from './service-view/service-view.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        InternalCommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule
    ],
    declarations: [
        ServiceAddComponent,
        ServiceEditComponent,
        ServiceListComponent,
        ServiceListRootComponent,
        ServiceViewComponent
    ],
    providers: [
        DatePipe
    ],
    exports: [
        ServiceAddComponent,
        ServiceEditComponent,
        ServiceListComponent,
        ServiceListRootComponent,
        ServiceViewComponent
    ],
    entryComponents: [
        ServiceViewComponent,
        ServiceEditComponent,
        ServiceAddComponent
    ]
})
export class ServiceModule { }
