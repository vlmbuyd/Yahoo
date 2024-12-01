import leftArrowIcon from "@/assets/common/left_arrow.svg";
import rightArrowIcon from "@/assets/common/right_arrow.svg";
import bannerPageNum from "@/assets/icons/banner-ads-page-num.svg";
import bannerAds_1 from "/banner-ads/banner-ads-1.webp";
import bannerAds_2 from "/banner-ads/banner-ads-2.webp";
import bannerAds_3 from "/banner-ads/banner-ads-3.webp";

export const BannerAds = ({ banner_num }: { banner_num: number }) => {
  return (
    <div className="w-full">
      <img
        src={
          banner_num === 1
            ? bannerAds_1
            : banner_num === 2
            ? bannerAds_2
            : bannerAds_3
        }
        alt="banner-advertising"
        className="w-full object-fill"
      />

      {banner_num === 3 && (
        <>
          <button
            className="flex justify-center items-center absolute top-[50%] -translate-y-1/2 left-0 w-[36px] h-[52px]"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <img src={leftArrowIcon} alt="left-arrow-icon" />
          </button>
          <button
            className="flex justify-center items-center absolute top-[50%] -translate-y-1/2 right-0 w-[36px] h-[52px]"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <img src={rightArrowIcon} alt="right-arrow-icon" />
          </button>

          <div className="flex flex-col items-start absolute bottom-[24px] left-[16px]">
            <span className="mb-[1px] text-[10px] font-normal text-[#ffffff]">
              ZIGZAG
            </span>
            <strong className="mb-[6px] text-[19px] font-normal text-[#ffffff]">
              あふれ出た割引 <br />
              今シーズンはこれで！
            </strong>
            <p className="text-[11px] font-normal text-[#ffffff]">
              オンライン単独割引~20%クーポン
            </p>
          </div>
          <div className="absolute bottom-[12px] right-[16px]">
            <img src={bannerPageNum} alt="banner-ads-page-num" />
          </div>
        </>
      )}
    </div>
  );
};
