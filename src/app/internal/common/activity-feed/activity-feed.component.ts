import { Component, OnInit } from "@angular/core";
import { ActivityFeedService } from "src/app/core/activity-feed/activity-feed.service";

@Component({
    selector: "app-activity-feed",
    templateUrl: "./activity-feed.component.html",
    styleUrls: ["./activity-feed.component.scss"]
})
export class ActivityFeedComponent implements OnInit {
    activities: any[];

    constructor(private _activityFeedService: ActivityFeedService) {}

    ngOnInit() {
        this._activityFeedService.getFeed(100, 0).subscribe(res => {
            this.activities = res.results;
            console.log(this.activities);
        });
    }
}
