import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-capsule-websites",
    templateUrl: "./capsule-websites.component.html",
    styleUrls: ["./capsule-websites.component.css"]
})
export class CapsuleWebsitesComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    constructor() {}

    ngOnInit(): void {}
}
