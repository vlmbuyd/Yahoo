import feedMenu from "@/mock/category-news-menu.json";
import feedData from "@/mock/category-news-feed.json";
import { CategoryFeedType } from "@/types/feed";
import { CategoryNewsFeed } from "./CategoryNewsFeed";
import arrowLeft from "@/assets/category-news-feed/arrow_left.svg";
import arrowRight from "@/assets/category-news-feed/arrow_right.svg";

export const CategoryNewsList = () => {
  const menus: string[] = feedMenu;
  const data = feedData as CategoryFeedType[];

  return (
    <section className="w-[730px] h-[320px] pt-[20px] mb-[24px] rounded-[10px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <header className="mb-[20px]">
        <ul className="flex">
          {menus.map((menu, idx) => (
            <li
              key={`category-news-menu-${idx}`}
              className="flex justify-center items-center w-[81px] h-[26px] border-r border-solid border-[#d7d7d7] last:border-none cursor-pointer"
            >
              {menu}
            </li>
          ))}
        </ul>
      </header>

      <div className="flex justify-center flex-wrap gap-x-[20px] gap-y-[16px] mb-[4px]">
        {data.map((feed, idx) => (
          <CategoryNewsFeed key={`category-news-feed-${idx}`} {...feed} />
        ))}
      </div>

      <div className="flex justify-center items-center w-full h-[46px] gap-[14px]">
        <button className="flex justify-center items-center w-[30px] h-[30px] bg-[white] rounded-[1000px] border border-solid border-[e3e3e7] shadow-[1px_1px_3px_rgba(0,0,0,0.05)]">
          <img src={arrowLeft} alt="" />
        </button>
        <span>もっと見る</span>
        <button className="flex justify-center items-center w-[30px] h-[30px] bg-[white] rounded-[1000px] border border-solid border-[e3e3e7] shadow-[1px_1px_3px_rgba(0,0,0,0.05)]">
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};
