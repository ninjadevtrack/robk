import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntityListComponent } from "./entity-list/entity-list.component";
import { EntityMenuComponent } from "./entity-menu/entity-menu.component";
import { EntityTableComponent } from "./entity-table/entity-table.component";
import { EntityEventTypeLabelsService } from "./entity-event-type-labels.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
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
