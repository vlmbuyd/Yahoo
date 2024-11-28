import { CategoryNewsList } from "@/components/category-news-feed/CategoryNewsList";
import { Header } from "@/components/common/Header";
import { SideBar } from "@/components/common/SideBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";
import { RecoNewsFeedList } from "@/components/reco-news-feed/RecoNewsFeedList";
import { AlertDashboard } from "@/components/common/AlertDashboard";
import bannerAds_1 from "/banner-ads/banner-ads-1.webp";
import bannerAds_2 from "/banner-ads/banner-ads-2.webp";
import bannerAds_3 from "/banner-ads/banner-ads-3.webp";
import leftArrowIcon from "@/assets/common/left_arrow.svg";
import rightArrowIcon from "@/assets/common/right_arrow.svg";
import bannerPageNum from "@/assets/icons/banner-ads-page-num.svg";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-[56px]">
      <Header />

      <div className="flex justify-center w-full gap-[40px] px-[20px]">
        <section>
          <SideBar />
        </section>

        <section className="min-w-[730px] max-w-[764px]">
          <CategoryNewsList />
          <div className="w-full h-auto mb-[24px]">
            <img
              src={bannerAds_1}
              alt="banner-advertising"
              className="block w-full object-fill"
            />
          </div>
          <RecoNewsFeedList />
        </section>

        <section className="flex flex-col flex-1 gap-[24px] min-w-[290px] max-w-[384px]">
          <RealTimeSearchTrends />
          <div className="w-full max-h-[184px]">
            <img src={bannerAds_2} alt="banner-advertising" />
          </div>
          <AlertDashboard />
          <div className="relative w-full h-[348px]">
            <img src={bannerAds_3} alt="banner-advertising" className="w-[" />

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
          </div>
        </section>
      </div>
    </div>
  );
};
