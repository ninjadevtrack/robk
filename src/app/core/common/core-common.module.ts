import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthStorageService } from "./auth-storage.service";
import { ConfigService } from "./config.service";
import { ChartService } from "./chart.service";

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [AuthStorageService, ConfigService, ChartService],
    exports: []
})
export class CoreCommonModule {}
