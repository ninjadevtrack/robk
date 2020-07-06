import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-capsule-details",
    templateUrl: "./capsule-details.component.html",
    styleUrls: ["./capsule-details.component.css"]
})
export class CapsuleDetailsComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    constructor() {}

    ngOnInit(): void {}
}
