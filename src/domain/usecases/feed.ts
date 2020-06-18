import {FeedElements} from '../models/feed.model';

export interface Feed {
  feedContent: (params: any) => Promise<FeedElements[]>;
}
