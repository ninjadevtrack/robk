import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-capsule-fields",
    templateUrl: "./capsule-fields.component.html",
    styleUrls: ["./capsule-fields.component.css"]
})
export class CapsuleFieldsComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    constructor() {}

    ngOnInit(): void {}
}
