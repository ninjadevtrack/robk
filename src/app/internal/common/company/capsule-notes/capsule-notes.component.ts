import { Component, OnInit, Input } from "@angular/core";
import { ICapsuleNote } from "src/app/core/company/model/capsule-note.model";

@Component({
    selector: "app-capsule-notes",
    templateUrl: "./capsule-notes.component.html",
    styleUrls: ["./capsule-notes.component.css"]
})
export class CapsuleNotesComponent implements OnInit {
    @Input() capsuleNotes: ICapsuleNote[];
    constructor() {}

    ngOnInit(): void {}
}
