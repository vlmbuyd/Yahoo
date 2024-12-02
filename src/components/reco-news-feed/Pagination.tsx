import feedData from "@/mock/reco-news-feed.json";
import { RecoFeedType } from "@/types/feed";
import { RecoNewsFeed } from "./RecoNewsFeed";
import btnPrev10 from "@/assets/icons/btn-prev-10.svg";
import btnPrev1 from "@/assets/icons/btn-prev-1.svg";
import btnNext10 from "@/assets/icons/btn-next-10.svg";
import btnNext1 from "@/assets/icons/btn-next-1.svg";
import { useState } from "react";

export const Pagination = () => {
  const data = feedData as RecoFeedType[];
  let pageList = [...new Array(10)].map((_, i) => i + 1);
  const [pageNumList, setPageNumList] = useState<number[]>(pageList);
  const [currPage, setCurrPage] = useState<number>(1);

  return (
    <>
      <section className="w-full h-[984px] px-[19px] py-[24px] mb-[24px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
        <ul className="flex flex-col gap-[10px]">
          {data.map(
            (feed, idx) =>
              feed.page === pageNumList[0] && (
                <RecoNewsFeed key={`reco-news-feed-${idx}`} {...feed} />
              )
          )}
        </ul>

        {/* pagination */}
        <ul className="flex justify-center items-center gap-[4px] w-[500px] h-[32px] mt-[27px] mx-auto">
          <button>
            <img src={btnPrev10} alt="btn-prev-10" className="cursor-pointer" />
          </button>
          <button>
            <img src={btnPrev1} alt="btn-prev-1" className="cursor-pointer" />
          </button>
          {pageNumList.map((pageNum, idx) => (
            <li
              key={`page-num-${idx}`}
              className={`flex justify-center items-center text-[13px] w-[32px] h-[32px] rounded-[50%] border border-solid cursor-pointer
                
                ${
                  pageNum === currPage
                    ? "text-[#7A42E8] border-[#7A42E8]"
                    : "text-[#767676] border-[#E3E3E7]"
                }`}
              onClick={() => setCurrPage(pageNum)}
            >
              {pageNum}
            </li>
          ))}
          <button onClick={() => setCurrPage((prev) => prev + 1)}>
            <img src={btnNext1} alt="btn-next-1" className="cursor-pointer" />
          </button>
          <button
            onClick={() => {
              setPageNumList((prev) => prev.map((num) => num + 10));
              setCurrPage(pageNumList[0]);
            }}
          >
            <img src={btnNext10} alt="btn-next-10" className="cursor-pointer" />
          </button>
        </ul>
      </section>
    </>
  );
};