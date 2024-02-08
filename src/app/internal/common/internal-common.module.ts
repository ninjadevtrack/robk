import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { InternalHeaderComponent } from "./header/header.component";
import { InternalCoreModule } from "../core/internal-core.module";
import { RouterModule } from "@angular/router";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyCheckboxModule as MatCheckboxModule } from "@angular/material/legacy-checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatSortModule } from "@angular/material/sort";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { ChartComponent } from "./company/chart/chart.component";
import { InViewportModule } from "ng-in-viewport";
import { CompanyDetailsComponent } from "./company/company-details/company-details.component";
import { ScoreFeedComponent } from "./score-feed/score-feed.component";
import { CoreModule } from "src/app/core/core.module";
import { ScoreComponent } from "./score-feed/score/score.component";
import { CompanyViewComponent } from "./company/company-view/company-view.component";
import { KpiCardComponent } from "./kpi-card/kpi-card.component";
import { CompanyLinksComponent } from "./company/company-links/company-links.component";
import { CompanyDetailsByCardsComponent } from "./company/company-details-by-cards/company-details-by-cards.component";
import { CapsuleNoteComponent } from "./company/capsule-note/capsule-note.component";
import { CapsuleDetailsComponent } from "./company/capsule-details/capsule-details.component";
import { CapsuleNotesComponent } from "./company/capsule-notes/capsule-notes.component";
import { CapsuleFieldsComponent } from "./company/capsule-fields/capsule-fields.component";
import { CapsuleAddressesComponent } from "./company/capsule-addresses/capsule-addresses.component";
import { CapsuleWebsitesComponent } from "./company/capsule-websites/capsule-websites.component";
import { LastContactComponent } from "./company/last-contact/last-contact.component";
import { DebugDialogComponent } from "./company/debug-d/debug-dialog.component";
import { ReportListComponent } from "./reports/report-list/report-list.component";
import { EmployerChangeReportComponent } from "./reports/employer-change-report/employer-change-report.component";
import { NewFoundersReportComponent } from './reports/new-founders-report/new-founders-report.component';
import { ReportBComponent } from './reports/report-b/report-b.component';
import { ReportCComponent } from './reports/report-c/report-c.component';
import { SearchEmployeesReportComponent } from './reports/search-employees-report/search-employees-report.component';

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
        MatTabsModule,
        MatListModule,
        MatExpansionModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        NgxJsonViewerModule,
        InternalCoreModule,
        ReactiveFormsModule,
        InViewportModule,
        CoreModule
    ],
    declarations: [
        ProfileComponent,
        InternalHeaderComponent,
        CompanyListComponent,
        ChartComponent,
        CompanyDetailsComponent,
        ScoreFeedComponent,
        ScoreComponent,
        CompanyViewComponent,
        KpiCardComponent,
        CompanyLinksComponent,
        CompanyDetailsByCardsComponent,
        CapsuleNoteComponent,
        CapsuleDetailsComponent,
        CapsuleNotesComponent,
        CapsuleFieldsComponent,
        CapsuleAddressesComponent,
        CapsuleWebsitesComponent,
        LastContactComponent,
        DebugDialogComponent,
        ReportListComponent,
        EmployerChangeReportComponent,
        NewFoundersReportComponent,
        ReportBComponent,
        ReportCComponent,
        SearchEmployeesReportComponent
    ],
    exports: [ProfileComponent, InternalHeaderComponent]
})
export class InternalCommonModule {}

/*BrowserModule, FormsModule, MatListModule, MatExpansionModule, MatSortModule, BrowserAnimationsModule, FlexLayoutModule, MatPaginatorModule*/
