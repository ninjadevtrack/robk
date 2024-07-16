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
        let adr = "";
        function appendToAddress(str) {
            if (!str) {
                return;
            }

            if (adr.length === 0) {
                adr += str;
            } else {
                adr += `, ${str}`;
            }
        }
        appendToAddress(address.street);
        appendToAddress(address.city);
        appendToAddress(address.state);
        appendToAddress(address.country);
        appendToAddress(address.zip);

        return adr;
    }
}
