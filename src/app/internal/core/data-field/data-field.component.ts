import { Component, OnInit, Input } from "@angular/core";
import { ESize } from "../size.enum";

@Component({
    selector: "data-field",
    styleUrls: ["./data-field.component.scss"],
    templateUrl: "./data-field.component.html"
})
export class DataFieldComponent implements OnInit {
    @Input() header: string;
    @Input() data: any;
    @Input() size: ESize;
    expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

    constructor() {}

    public ngOnInit() {}

    isDataUrl(): boolean {
        if (!this.data) {
            return false;
        }
        const regex = new RegExp(this.expression);
        return this.data.match(regex) !== null ? true : false;
    }

    getStyle() {
        switch (this.size) {
            case ESize.SMALL:
                return "data-field-small";
            case ESize.MEDIUM:
                return "data-field-medium";
            default:
                return "data-field";
        }
    }
}
