import { Injectable } from "@angular/core";
import * as stream from "getstream";
import { Consts, ConfigService } from "../common/config.service";
import { AuthStorageService } from "../common/auth-storage.service";
import { Observable, from, Subject, map } from "rxjs";
import {
    IScoreResult,
    IScoreNotificationResult
} from "./model/score-feed.model";

@Injectable()
export class ScoreFeedService {
    private client: stream.StreamClient;
    private feed: stream.Feed; // StreamF
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

        const notificationsCallback = (data: IScoreNotificationResult) => {
            const res = {
                ...data,
                deleted: this.convert(data.deleted),
                new: this.convert(data.new)
            };
            this.notificationsDS.next(res);
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

    private convert(results: any[]): IScoreResult[] {
        const l = results.map(r => {
            return <IScoreResult>{ ...r, time: new Date(`${r.time}Z`) };
        });

        return l;
    }

    getFeed(limit, offset): Observable<IScoreResult[]> {
        return from(this.feed.get({ limit, offset })).pipe(
            map((obj: any) => {
                return <IScoreResult[]>this.convert(obj.results);
            })
        );
    }
}
