import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InternalHeaderComponent } from './header/header.component';
import { InternalCoreModule } from '../core/internal-core.module';
import { RouterModule } from '@angular/router';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { MatPaginatorModule } from "@angular/material/paginator";
import { ReactiveFormsModule } from "@angular/forms";
import { GraphWatchListComponent } from './graph-watch-list/graph-watch-list.component';
import { GraphWatchListService } from "../../core/graph-watch-list/graph-watch-list.service";
import { ChartComponent } from './chart/chart/chart.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MatMenuModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatTableModule,
      MatListModule,
      MatExpansionModule,
      MatSortModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      InternalCoreModule,
      ReactiveFormsModule,
  ],
  declarations: [
      ProfileComponent,
      InternalHeaderComponent,
      GraphWatchListComponent,
      ChartComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent
  ],
  providers: [
      GraphWatchListService
  ]

})
export class InternalCommonModule { }


/*BrowserModule, FormsModule, MatListModule, MatExpansionModule, MatSortModule, BrowserAnimationsModule, FlexLayoutModule, MatPaginatorModule*/
