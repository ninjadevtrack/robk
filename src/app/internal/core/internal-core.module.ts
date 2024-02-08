import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataFieldComponent } from "./data-field/data-field.component";
import { NumberWithSeparatorPipe } from "./number-with-separator.pipe";
import { SearchPipe } from "./search.pipe";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { IconLinkButtonComponent } from "./icon-link-button/icon-link-button.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatOptionModule, MatNativeDateModule } from "@angular/material/core";
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
