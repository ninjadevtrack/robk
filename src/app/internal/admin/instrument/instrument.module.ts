import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {InstrumentAddComponent} from './instrument-add/instrument-add.component';
import {InstrumentEditComponent} from './instrument-edit/instrument-edit.component';
import {InstrumentListComponent} from './instrument-list/instrument-list.component';
import {InstrumentListRootComponent} from './instrument-list-root/instrument-list-root.component';
import {InstrumentViewComponent} from './instrument-view/instrument-view.component';

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
        InstrumentAddComponent,
        InstrumentEditComponent,
        InstrumentListComponent,
        InstrumentListRootComponent,
        InstrumentViewComponent
    ],
    exports: [
        InstrumentAddComponent,
        InstrumentEditComponent,
        InstrumentListComponent,
        InstrumentListRootComponent,
        InstrumentViewComponent
    ],
    entryComponents: [
        InstrumentViewComponent,
        InstrumentEditComponent,
        InstrumentAddComponent
    ]
})
export class InstrumentModule { }
