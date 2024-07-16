export interface IGetStreamFeed {
    FEED_GROUP: string;
    USER_ID: string;
}

export interface IGetStreamSettings {
    API_KEY: string;
    APP_ID: string;
    MAIN_FEED: IGetStreamFeed;
}
