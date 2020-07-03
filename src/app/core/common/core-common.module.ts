import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthStorageService } from "./auth-storage.service";
import { ConfigService } from "./config.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ChartService } from "./chart.service";

@NgModule({
    imports: [CommonModule],
    declarations: [NotFoundComponent],
    providers: [AuthStorageService, ConfigService, ChartService],
    exports: [NotFoundComponent]
})
export class CoreCommonModule {}
