import { Component, OnInit, Input } from "@angular/core";
import {
    ICapsuleDetails,
    ICapsuleDetailsWebsite
} from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-capsule-websites",
    templateUrl: "./capsule-websites.component.html",
    styleUrls: ["./capsule-websites.component.css"]
})
export class CapsuleWebsitesComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    websites: ICapsuleDetailsWebsite[];
    constructor() {}

    ngOnInit(): void {
        const liType = "LINKED_IN";

        this.websites = this.capsuleDetails.websites.sort((a, b) => {
            if (a.service === liType && b.service !== liType) {
                return -1;
            }
            if (a.service === b.service) {
                return 0;
            }

            return 1;
        });
    }

    getWebsites() {}
}
