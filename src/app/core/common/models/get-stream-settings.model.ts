export interface GetStreamFeed {
    FEED_GROUP: string;
    USER_ID: string;
}

export interface GetStreamSettings {
    API_KEY: string;
    APP_ID: string;
    MAIN_FEED: GetStreamFeed;
}
