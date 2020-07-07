import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-last-contact",
    templateUrl: "./last-contact.component.html",
    styleUrls: ["./last-contact.component.css"]
})
export class LastContactComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    constructor() {}

    ngOnInit(): void {}
}
