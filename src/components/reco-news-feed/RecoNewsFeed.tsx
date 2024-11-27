import { RecoFeedType } from "@/types/feed";

export const RecoNewsFeed = (feed: RecoFeedType) => {
  return (
    <article className="flex items-center min-w-[692px] min-h-[140px] max-w-[708px] max-h-[128px] pl-[6px] rounded-[12px] bg-[white]">
      <div className="mr-[20px] ">
        <img
          src={feed.imgUrl}
          alt="category-news-image"
          className="w-[190px] h-auto"
        />
      </div>

      <div className="flex flex-col justify-center w-[452px]">
        <h4 className="w-full mb-[9px] text-[18px] font-bold text-[#222222] line-clamp-2 overflow-hidden text-ellipsis">
          {feed.title}
        </h4>

        <p className="w-full mb-[17px] text-[15px] font-normal text-[#444444]">
          {feed.content}
        </p>

        <span className="text-[13px] font-normal text-[#888888]">
          {feed.author}
        </span>
      </div>
    </article>
  );
};
