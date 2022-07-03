import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Consts } from "src/app/core/common/config.service";
import { Chart } from "chart.js";
import { CompanyService } from "src/app/core/company/company.service";
import { ICompany } from "src/app/core/company/model/company.model";
import { ChartService } from "src/app/core/common/chart.service";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";
import { ICapsuleNote } from "src/app/core/company/model/capsule-note.model";
import { Observable } from "rxjs";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";
import { DebugDialogComponent } from "../debug-d/debug-dialog.component";
import { AuthStorageService } from "src/app/core/common/auth-storage.service";
import { PermissionsEnum } from "src/app/core/common/permissions.enum";

@Component({
    selector: "app-company-view",
    templateUrl: "./company-view.component.html",
    styleUrls: ["./company-view.component.scss"]
})
export class CompanyViewComponent implements OnInit {
    slug: string;
    company: ICompany;
    capsuleNotes: ICapsuleNote[];
    capsuleDetails: ICapsuleDetails;
    showDebugInfo: boolean = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _chartService: ChartService,
        private _smoothScrollService: SmoothScrollService,
        private _session: AuthStorageService,
        private _companyService: CompanyService
    ) {}

    ngOnInit(): void {
        this._smoothScrollService.scrollTo(0, 0);
        this._route.params.subscribe(params => {
            this.slug = params.slug;

            this._companyService
                .getCompany(this.slug)
                .subscribe((company: ICompany) => {
                    if (!company) {
                        this._router.navigate(["/404"]);
                    }
                    this.company = company;
                });

            if (this.hasCapsuleGetNotesPermission()) {
                this._companyService
                .getNotes(this.slug)
                .subscribe((capsuleNotes: ICapsuleNote[]) => {
                    this.capsuleNotes = capsuleNotes;
                });
            }

            this._companyService
                .getCapsuleDetails(this.slug)
                .subscribe((capsuleDetails: ICapsuleDetails) => {
                    this.capsuleDetails = capsuleDetails;
                });
        });
    }

    hasCapsuleGetNotesPermission() {
        const permissions = this._session.getItem(Consts.USER_PERMISSIONS);
        return permissions && permissions.includes(PermissionsEnum.CAPSULE_GET_NOTES)
    }

    toggleDebugInfo(): void {
        this.showDebugInfo = !this.showDebugInfo;
        /*
        const dialogRef = this._dialog.open(DebugDialogComponent, {
            data: {
                company: this.company,
                capsuleNotes: this.capsuleNotes,
                capsuleDetails: this.capsuleDetails
            }
        });*/
    }

    getDebugInfo() {
        return {
            company: this.company,
            capsuleNotes: this.capsuleNotes,
            capsuleDetails: this.capsuleDetails
        };
    }
}
