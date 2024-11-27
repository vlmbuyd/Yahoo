import trendData from "@/mock/realtime-search-trends.json";
import upRankArrow from "@/assets/icons/up-rank-arrow.svg";
import downRankArrow from "@/assets/icons/down-rank-arrow.svg";

export const RealTimeSearchTrends = () => {
  const data: { content: string; trendingUp: boolean }[] = trendData;
  return (
    <section className="min-w-[290px] max-w-[384px] min-h-[320px]  max-h-[346px] pt-[20px] pl-[20px] rounded-[12px] bg-[#ffffff] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <h3 className="text-[19px] font-bold text-[#222222]">リアルタイム</h3>
      <ul>
        {data.map((item, idx) => (
          <li key={`trend-keyword-${idx}`} className="flex">
            <strong>{idx + 1}</strong>
            <img
              src={item.trendingUp ? upRankArrow : downRankArrow}
              alt="trend-rank-icon"
            />
            <h4>{item.content}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};
