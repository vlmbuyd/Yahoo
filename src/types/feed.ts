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

export interface RecoFeedType extends FeedType {
  page: number[];
  content: string;
  author: string;
}
