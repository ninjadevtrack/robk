import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataFieldComponent } from "./data-field/data-field.component";
import { NumberWithSeparatorPipe } from "./number-with-separator.pipe";
import { SearchPipe } from "./search.pipe";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { IconLinkButtonComponent } from "./icon-link-button/icon-link-button.component";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatNativeDateModule } from "@angular/material/core";
import { MatLegacyOptionModule as MatOptionModule } from "@angular/material/legacy-core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CardTemplateComponent } from "./templates/card-template/card-template.component";
import { EntityModule } from "./entity/entity.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        EntityModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDialogModule,
        MatDatepickerModule,
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCardModule,
        NgbModule
    ],
    declarations: [
        DataFieldComponent,
        NumberWithSeparatorPipe,
        SearchPipe,
        ConfirmDialogComponent,
        IconLinkButtonComponent,
        CardTemplateComponent
    ],
    exports: [
        EntityModule,
        DataFieldComponent,
        NumberWithSeparatorPipe,
        SearchPipe,
        ConfirmDialogComponent,
        IconLinkButtonComponent,
        CardTemplateComponent
    ]
})
export class InternalCoreModule {}
