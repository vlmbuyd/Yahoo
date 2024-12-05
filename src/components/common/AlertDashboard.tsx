import sportTeam1 from "@/assets/alert-dashboard/sport-team-1.svg";
import sportTeam2 from "@/assets/alert-dashboard/sport-team-2.svg";
import { Link } from "react-router-dom";

export const AlertDashboard = () => {
  return (
    <section className="w-full min-h-[348px] max-h-[376px] pt-[20px] px-[20px] pb-[28px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.05)]">
      <h3 className="text-[19px] font-bold text-[#222222] mb-[18px]">情報</h3>

      <div
        className="flex justify-between items-center w-full min-h-[42px] max-h-[48px] px-[16px] border border-solid rounded-[5px] mb-[10px]"
        style={{
          backgroundColor: "rgba(77, 69, 214, 0.01)",
          borderColor: "rgba(77, 69, 214, 0.3)",
        }}
      >
        <strong className="text-[15px] font-bold text-[#333333]">
          交通知らせ
        </strong>
        <div className="flex">
          <strong className="block mr-[3px] text-[13px] font-bold text-[#333333] underline">
            1件
          </strong>
          <span className="text-[13px] font-normal text-[#555555]">
            (20:55)
          </span>
        </div>
      </div>

      <div
        className="flex justify-between items-center w-full min-h-[42px] max-h-[48px] px-[16px] border border-solid rounded-[5px] mb-[10px]"
        style={{
          backgroundColor: "rgba(77, 69, 214, 0.01)",
          borderColor: "rgba(77, 69, 214, 0.3)",
        }}
      >
        <strong className="text-[15px] font-bold text-[#333333]">
          災い知らせ
        </strong>
        <strong className="text-[13px] font-bold text-[#333333]">
          既読しました
        </strong>
      </div>

      <div
        className="flex flex-col items-center w-full min-h-[156px] max-h-[164px] px-[16px] py-[12px] border border-solid rounded-[5px]"
        style={{
          backgroundColor: "rgba(77, 69, 214, 0.01)",
          borderColor: "rgba(77, 69, 214, 0.3)",
        }}
      >
        <div className="flex justify-between items-start w-full h-[32px] border-b border-solid border-b-[#B3B1C5] mb-[12px]">
          <strong className="w-[90px] h-[22px] text-[15px] font-bold text-[#333333]">
            スポーツ日程
          </strong>
          <div className="flex gap-[6px]">
            <strong className=" text-[13px] font-bold text-[#4D45D6]">
              プロ野球
            </strong>
            <span className=" text-[13px] font-medium text-[#999999]">
              Jリーグ
            </span>
          </div>
        </div>

        <div className="flex w-full justify-evenly mb-[12px]">
          <div className="flex flex-col justify-center items-center w-[54px] h-[54px] ">
            <img src={sportTeam1} alt="sport-team-logo" />
            <span className="text-[13px] font-medium text-[#000000]">
              NPB RED
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <strong className="text-[14px] font-semibold text-[#000000]">
              1 : 1
            </strong>
            <span className="text-[11px] font-normal text-[#000000]">
              13:05
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[54px] h-[54px] ">
            <img src={sportTeam2} alt="sport-team-logo" />
            <span className="text-[13px] font-medium text-[#000000]">
              NPB RED
            </span>
          </div>
        </div>
        <Link
          to="https://baseball.yahoo.co.jp/npb/"
          className="w-full text-[13px] font-light text-right text-[#333333] underline"
        >
          <span>もっと見る</span>
        </Link>
      </div>
    </section>
  );
};
