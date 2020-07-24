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
    liService: string = "LINKED_IN";
    constructor() {}

    ngOnInit(): void {
        const liService = this.liService;
        this.websites = this.capsuleDetails.websites.sort((a, b) => {
            if (a.service === liService && b.service !== liService) {
                return -1;
            }
            if (a.service === b.service) {
                return 0;
            }

            return 1;
        });
    }

    isLI(website: ICapsuleDetailsWebsite) {
        if (!website) {
            return false;
        }
        return website.service === this.liService;
    }

    getWebsites() {}
}
