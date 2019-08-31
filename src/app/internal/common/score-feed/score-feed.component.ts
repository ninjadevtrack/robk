import { Component, OnInit } from "@angular/core";
import { ScoreFeedService } from "src/app/core/score-feed/score-feed.service";
import { IScoreResult } from "src/app/core/score-feed/model/score-feed.model";

@Component({
    selector: "app-score-feed",
    templateUrl: "./score-feed.component.html",
    styleUrls: ["./score-feed.component.scss"]
})
export class ScoreFeedComponent implements OnInit {
    scores: IScoreResult[];

    constructor(private _scoreFeedService: ScoreFeedService) {}

    ngOnInit() {
        this._scoreFeedService.getFeed(100, 0).subscribe(scores => {
            this.scores = scores;
            console.log(this.scores);
        });
    }
}
