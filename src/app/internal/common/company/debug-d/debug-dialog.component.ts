import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ICompany } from "src/app/core/company/model/company.model";
import { ICapsuleNote } from "src/app/core/company/model/capsule-note.model";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

export interface DialogData {
    company: ICompany;
    capsuleNotes: ICapsuleNote[];
    capsuleDetails: ICapsuleDetails;
}

@Component({
    selector: "app-debug-dialog",
    templateUrl: "./debug-dialog.component.html",
    styleUrls: ["./debug-dialog.component.css"]
})
export class DebugDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<DebugDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    ngOnInit(): void {}
}
