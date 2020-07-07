import { Component, OnInit, Input } from "@angular/core";
import {
    ICapsuleDetails,
    ICapsuleDetailsAddress
} from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-capsule-addresses",
    templateUrl: "./capsule-addresses.component.html",
    styleUrls: ["./capsule-addresses.component.css"]
})
export class CapsuleAddressesComponent implements OnInit {
    @Input() capsuleDetails: ICapsuleDetails;
    constructor() {}

    ngOnInit(): void {}

    getAddressString(address: ICapsuleDetailsAddress): string {
        return `${address.city}, ${address.country}`;
    }
}
