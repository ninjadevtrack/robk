import { Component, OnInit } from "@angular/core";
import { ActivityFeedService } from "src/app/core/activity-feed/activity-feed.service";
import { IScoreResult } from "src/app/core/activity-feed/model/activity-feed.model";

@Component({
    selector: "app-activity-feed",
    templateUrl: "./activity-feed.component.html",
    styleUrls: ["./activity-feed.component.scss"]
})
export class ActivityFeedComponent implements OnInit {
    activities: IScoreResult[];

    constructor(private _activityFeedService: ActivityFeedService) {}

    ngOnInit() {
        this._activityFeedService.getFeed(100, 0).subscribe(activities => {
            this.activities = activities;
        });
    }

    stringify(obj: any): string {
        return JSON.stringify(obj);
    }
}
