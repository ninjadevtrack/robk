import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFieldComponent } from './data-field/data-field.component';
import { NumberWithSeparatorPipe } from './number-with-separator.pipe';
import { SearchPipe } from './search.pipe';
import { CalendarModule, DateAdapter } from './calendar/angular-calendar';
import { adapterFactory } from './calendar/angular-calendar/date-adapters/date-fns';
import { DemoUtilsModule } from './calendar/utils/module';

@NgModule({
  imports: [
      CommonModule,
      CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
      }),
      DemoUtilsModule,
  ],
  declarations: [
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe
  ],
  exports: [
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe,
      CalendarModule
  ]
})
export class InternalCommonModule { }
