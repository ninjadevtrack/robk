import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleNote } from "src/app/core/company/model/capsule-note.model";

@Component({
    selector: "app-capsule-note",
    templateUrl: "./capsule-note.component.html",
    styleUrls: ["./capsule-note.component.scss"]
})
export class CapsuleNoteComponent implements OnInit {
    @Input() note: ICapsuleNote;

    constructor() {}

    ngOnInit(): void {}
}
