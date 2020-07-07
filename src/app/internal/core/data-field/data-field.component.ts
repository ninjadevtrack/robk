import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ESize } from "../size.enum";

@Component({
    selector: "data-field",
    styleUrls: ["./data-field.component.scss"],
    templateUrl: "./data-field.component.html"
})
export class DataFieldComponent implements OnInit {
    @Input() header: string;
    @Input() data: any;
    @Input() url: string;
    @Input() size: ESize;

    constructor(private _router: Router) {}

    public ngOnInit() {}

    navigateByUrl() {
        this._router.navigateByUrl(this.url);
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
