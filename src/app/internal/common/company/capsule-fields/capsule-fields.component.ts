import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";
import { ESize } from "src/app/internal/core/size.enum";

@Component({
    selector: "app-capsule-fields",
    templateUrl: "./capsule-fields.component.html",
    styleUrls: ["./capsule-fields.component.css"]
})
export class CapsuleFieldsComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    dataFieldSize: ESize = ESize.MEDIUM;

    constructor() {}

    ngOnInit(): void {}
}
