import feedData from "@/mock/category-news-feed.json";
import { CategoryFeedType } from "@/types/feed";
import { CategoryNewsFeed } from "./CategoryNewsFeed";
import arrowLeft from "@/assets/category-news-feed/arrow_left.svg";
import arrowRight from "@/assets/category-news-feed/arrow_right.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CategoryNewsList = () => {
  const menus: string[] = [
    "主要",
    "経済",
    "エンタメ",
    "スポーツ",
    "国内",
    "国際",
    "IT",
    "科学",
    "地域",
  ];
  const data = feedData as CategoryFeedType[];
  const [selectedCategory, setSelectedCategory] = useState<string>("主要");

  return (
    <section className="w-full h-[320px] pt-[20px] rounded-[10px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <header className="mb-[20px]">
        <ul className="flex">
          {menus.map((menu, idx) => (
            <li
              key={`category-news-menu-${idx}`}
              className={`flex justify-center items-center w-[81px] h-[26px] border-r border-solid border-[#d7d7d7] text-[17px] last:border-none cursor-pointer
                ${
                  selectedCategory === menu
                    ? "font-semibold text-[#4D45D6]"
                    : "font-medium text-[#999999]"
                }
                `}
              onClick={() => setSelectedCategory(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </header>

      <div className="flex justify-center flex-wrap gap-x-[20px] gap-y-[16px] mb-[4px]">
        {data.map((feed, idx) => (
          <Link to={feed.url}>
            <CategoryNewsFeed key={`category-news-feed-${idx}`} {...feed} />
          </Link>
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
