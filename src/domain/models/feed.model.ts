export enum FeedElements {
  Article = 0,
  FacebookPost,
  InstagramPost,
  YouTubeVideo,
  Testimony,
}

export type Article = {
  owner: {
    name: string;
    position: string;
    avatar: string;
  };
};

export type FacebookPost = {
  url: string;
};

export type InstagramPost = {
  url: string;
};

export type YouTubeVideo = {
  url: string;
};

export type Testimony = {
  person: string;
};

export type FeedModel = {
  id: number;
  type: FeedElements;
  title: string;
  subtitle: string;

  weekNotification?: any;

  article?: Article;
  facebookPost?: FacebookPost;
  instagramPost?: InstagramPost;
  youTubeVideo?: YouTubeVideo;
  testimony?: Testimony;
};
