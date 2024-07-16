import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { UserViewComponent } from "./user-view/user-view.component";
import { CoreModule } from "../../../core/core.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { InternalCoreModule } from "../../core/internal-core.module";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        CoreModule,
        InternalCoreModule
    ],
    declarations: [
        UserListComponent,
        UserMenuComponent,
        UserTableComponent,
        UserViewComponent,
        UserAddComponent,
        UserEditComponent
    ],
    exports: [
        UserListComponent,
        UserMenuComponent,
        UserTableComponent,
        UserViewComponent
    ]
})
export class UserModule {}
