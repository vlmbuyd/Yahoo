import { CategoryFeedType } from "@/types/feed";
import commentIcon from "@/assets/category-news-feed/comment.svg";

export const CategoryNewsFeed = (feed: CategoryFeedType) => {
  return (
    <article className="flex w-[331px] h-[96px] bg-[white] cursor-pointer">
      <div className="mr-[12px] ">
        <img
          src={feed.imgUrl}
          alt="category-news-image"
          className="w-[142px] h-[96px]"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="w-[177px] mb-[23px] text-[15px] font-medium text-[#222222] line-clamp-2 overflow-hidden text-ellipsis">
          {feed.title}
        </h4>
        <div className="flex justify-between items-center w-[167px]">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mr-[2px]">
              <img src={commentIcon} alt="comment-icon" />
            </div>
            <span className="text-[12px] font-normal text-[#444444]">
              {feed.comment}
            </span>
          </div>
          <strong className="text-[12px] font-medium text-[#DCB906]">
            {feed.isNew ? "NEW" : ""}
          </strong>
        </div>
      </div>
    </article>
  );
};
