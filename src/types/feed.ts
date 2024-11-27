interface FeedType {
  id: number;
  page: number;
  title: string;
  imgUrl: string;
  url: string;
}

export interface CategoryFeedType extends FeedType {
  category: string;
  comment: number;
  isNew: boolean;
}

export interface RecoFeedType extends FeedType {
  content: string;
}
