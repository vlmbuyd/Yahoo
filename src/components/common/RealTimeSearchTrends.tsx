import trendData from "@/mock/realtime-search-trends.json";
import upRankArrow from "@/assets/icons/up-rank-arrow.svg";
import downRankArrow from "@/assets/icons/down-rank-arrow.svg";
import { Link } from "react-router-dom";

export const RealTimeSearchTrends = () => {
  const data: { content: string; trendingUp: boolean; url: string }[] =
    trendData;

  return (
    <section className="min-w-[290px] max-w-[384px] min-h-[320px] max-h-[346px] pt-[20px] pl-[20px] pr-[14px] pb-[12px] rounded-[12px] bg-[#ffffff] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <h3 className="text-[19px] mb-[24px] font-bold text-[#222222]">
        リアルタイム
      </h3>
      <ul className="flex flex-col gap-[18px] mb-[12px]">
        {data.map((item, idx) => (
          <Link to={item.url}>
            <li key={`trend-keyword-${idx}`} className="flex items-center ">
              <strong className="flex justify-center items-center w-[28px] h-[28px] rounded-[8px] mr-[2px] text-[14px] font-semibold text-[#333333] bg-[#f1f3f5]">
                {idx + 1}
              </strong>
              <img
                src={item.trendingUp ? upRankArrow : downRankArrow}
                alt="trend-rank-icon"
                className="mr-[4px]"
              />
              <h4 className="text-[14px] font-medium text-[#333333]">
                {item.content}
              </h4>
            </li>
          </Link>
        ))}
      </ul>

      <span className="flex justify-end w-full text-[13px] font-light text-[#5555555]">
        もっと見る
      </span>
    </section>
  );
};
