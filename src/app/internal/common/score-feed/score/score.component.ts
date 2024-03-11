import { Component, OnInit, Input } from "@angular/core";
import { IScoreResult } from "src/app/core/score-feed/model/score-feed.model";
import moment from "moment";

@Component({
    selector: "app-score",
    templateUrl: "./score.component.html",
    styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {
    @Input() score: IScoreResult;

    constructor() {}

    ngOnInit() {}

    getLink() {
        const slug = this.score.payload.message.linkedinSlug;
        if (slug) {
            return `/i/gwl/${slug}`;
        }

        return `https://linkedin.com/company/${this.score.payload.message.linkedin_id}`;
    }

    stringify(obj: any): string {
        return JSON.stringify(obj);
    }

    getHumanizedTimeAgo() {
        const scoreTime = moment(this.score.time),
            duration = moment.duration(scoreTime.diff(moment(new Date())));

        return duration.humanize();
    }
}
