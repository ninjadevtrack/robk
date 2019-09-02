import { Injectable } from "@angular/core";
import * as stream from "getstream";
import { Consts, ConfigService } from "../common/config.service";
import { AuthStorageService } from "../common/auth-storage.service";
import { Observable, from, Subject } from "rxjs";
import { map } from "rxjs/operators";
import {
    IScoreResult,
    IScoreNotificationResult
} from "./model/score-feed.model";

@Injectable()
export class ScoreFeedService {
    private client: stream.Client;
    private feed: stream.Feed;
    private notificationsDS: Subject<IScoreNotificationResult> = new Subject<
        IScoreNotificationResult
    >();
    notifications$: Observable<IScoreNotificationResult>;

    constructor(
        private _configService: ConfigService,
        private _session: AuthStorageService
    ) {
        const getStreamToken = this._session.getItem(Consts.GET_STREAM_TOKEN);
        const getStreamSettings = this._configService.getGetStreamSettings();

        this.client = stream.connect(
            getStreamSettings.API_KEY,
            getStreamToken,
            getStreamSettings.APP_ID
        );

        this.feed = this.client.feed(
            getStreamSettings.MAIN_FEED.FEED_GROUP,
            getStreamSettings.MAIN_FEED.USER_ID
        );

        this.notifications$ = this.notificationsDS.asObservable();

        const notificationsCallback = data => {
            this.notificationsDS.next(data);
        };

        this.feed
            .subscribe(notificationsCallback)
            .then(
                () =>
                    console.log(
                        `Listening to the feed notifications in realtime`
                    ),
                err => console.log(`Can't listen feed's notifications ${err}`)
            );
    }

    getFeed(limit, offset): Observable<IScoreResult[]> {
        return from(this.feed.get({ limit, offset })).pipe(
            map((obj: any) => {
                return <IScoreResult[]>obj.results;
            })
        );
    }
}
