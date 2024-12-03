// import feedData from "@/mock/reco-news-feed-load-more.json";
import feedData from "@/mock/reco-news-feed-pagination.json";
import { RecoFeedType } from "@/types/feed";
import { RecoNewsFeed } from "./RecoNewsFeed";
import { useState } from "react";

export const LoadMore = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  // const data = feedData as RecoFeedLoadMoreType[];
  const data = feedData as RecoFeedType[];
  const filteredData = data.filter((v) =>
    [...new Array(currPage)].map((_, i) => i + 1).includes(v.page[0])
  );

  return (
    <section className="w-full h-auto min-h-[984px] px-[19px] py-[24px] rounded-[10px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <ul className="flex flex-col gap-[10px]">
        {filteredData.map((feed, idx) => (
          <RecoNewsFeed key={`reco-news-feed-${idx}`} {...feed} />
        ))}
      </ul>

      {/* load more */}
      {currPage !== 5 ? (
        <button
          className="flex justify-center items-center gap-[4px] w-[682px] h-[42px] mt-[25px] border border-solid border-[#D5D5DA] rounded-[14px] mx-auto
      "
          onClick={() => {
            setCurrPage((prev) => prev + 1);
          }}
        >
          もっと見る
        </button>
      ) : null}
    </section>
  );
};
