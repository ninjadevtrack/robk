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
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from "../../core/company/company.service";
import { ChartComponent } from './chart/chart/chart.component';
import { InViewportModule } from "ng-in-viewport";
import { CompanyDetailsComponent } from "./company-details/company-details.component";

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
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      InternalCoreModule,
      ReactiveFormsModule,
      InViewportModule
  ],
  declarations: [
      ProfileComponent,
      InternalHeaderComponent,
      CompaniesComponent,
      ChartComponent,
      CompanyDetailsComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent
  ],
  providers: [
      CompanyService
  ]

})
export class InternalCommonModule { }


/*BrowserModule, FormsModule, MatListModule, MatExpansionModule, MatSortModule, BrowserAnimationsModule, FlexLayoutModule, MatPaginatorModule*/
