import { Injectable } from "@angular/core";
import * as stream from "getstream";
import { Consts, ConfigService } from "../common/config.service";
import { AuthStorageService } from "../common/auth-storage.service";
import { Observable, from } from "rxjs";
import { switchMap, mapTo, map } from "rxjs/operators";
import { IScoreResult } from "./model/score-feed.model";

@Injectable()
export class ScoreFeedService {
    private client: stream.Client;
    private feed: stream.Feed;

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
    }

    getFeed(limit, offset): Observable<IScoreResult[]> {
        return from(this.feed.get({ limit, offset })).pipe(
            map((obj: any) => {
                return <IScoreResult[]>obj.results;
            })
        );
    }
}

/**
 * 
 * function getActivities(limit, offset) {
    return Feed.get({ limit, offset });
}

module.exports = (streamClient, feedSettings) => {
    Feed = streamClient.feed(feedSettings.feedGroup, feedSettings.userId);
    FeedSettigns = feedSettings;

    return {
        addActivity,
        getActivities
    };
};

 */

/**
 * 

import { StreamActivity } from './stream-activity';
const APP_TOKEN = 'ejafvxbtfbz6';
const APP_ID = '24870';
const FEED_GROUP = 'conversation';
const FEED_ID = 'conversation_9876';
const FEED_TOKEN = 'qkrJTwSrK9-a1ZSmiGVJniWeTtY';
const TOPIC_FEED_GROUP = 'topic_timeline';
const TOPIC_FEED_ID = 'topic_123';
const TOPIC_FEED_TOKEN = 'SSg7p93Fjpw_aqJe3l-oR8TC0oI';

@Injectable()
export class StreamClientService {
  client: stream.Client;

  constructor() {
    // Instantiate a new client (client side)
    this.client = stream.connect(APP_TOKEN, null, APP_ID);
  }

  getFeed(): Promise<StreamActivity[]> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);

    // Fetch the feed and pick the results property off the response object
    return feed.get().then(response => response['results'])
  }

  addActivity(activity: StreamActivity): Promise<string> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);
    const addActivityPromise = feed.addActivity(activity)
      .then(response => response['id']);

    // return the promise resolution
    return Promise.resolve(addActivityPromise);
  }
}

 */
