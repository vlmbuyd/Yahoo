interface FeedType {
  id: number;
  title: string;
  imgUrl: string;
  url: string;
}

export interface CategoryFeedType extends FeedType {
  page: number;
  category: string;
  comment: number;
  isNew: boolean;
}

export interface RecoFeedPaginationType extends FeedType {
  page: number[];
  content: string;
  author: string;
}

export interface RecoFeedLoadMoreType extends FeedType {
  page: number;
  content: string;
  author: string;
}
