import { Component, OnInit, Input } from "@angular/core";
import { IScoreResult } from "src/app/core/score-feed/model/score-feed.model";

@Component({
    selector: "app-score",
    templateUrl: "./score.component.html",
    styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {
    @Input() score: IScoreResult;

    constructor() {}

    ngOnInit() {}

    getLinkedInLink() {
        return `https://linkedin.com/company/${this.score.payload.message.linkedin_id}`;
    }

    stringify(obj: any): string {
        return JSON.stringify(obj);
    }
}
