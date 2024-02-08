import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntityListComponent } from "./entity-list/entity-list.component";
import { EntityMenuComponent } from "./entity-menu/entity-menu.component";
import { EntityTableComponent } from "./entity-table/entity-table.component";
import { EntityEventTypeLabelsService } from "./entity-event-type-labels.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTabsModule,
        MatMenuModule
    ],
    declarations: [
        EntityListComponent,
        EntityMenuComponent,
        EntityTableComponent
    ],
    exports: [EntityListComponent, EntityMenuComponent, EntityTableComponent],
    providers: [EntityEventTypeLabelsService]
})
export class EntityModule {}
