import feedData from "@/mock/reco-news-feed.json";
import { RecoFeedType } from "@/types/feed";
import { RecoNewsFeed } from "./RecoNewsFeed";

export const LoadMore = () => {
  const data = feedData as RecoFeedType[];

  return (
    <section className="w-full h-[1002px] px-[19px] py-[24px] rounded-[10px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <ul className="flex flex-col gap-[10px]">
        {data.map((feed, idx) => (
          <RecoNewsFeed key={`reco-news-feed-${idx}`} {...feed} />
        ))}
      </ul>
    </section>
  );
};
