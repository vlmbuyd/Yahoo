import { CategoryNewsList } from "@/components/category-news-feed/CategoryNewsList";
import { Header } from "@/components/common/Header";
import bannerAds_1 from "/banner-ads/banner-ads-1.webp";
import bannerAds_2 from "/banner-ads/banner-ads-2.webp";
import { SideBar } from "@/components/common/SideBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";
import { RecoNewsFeedList } from "@/components/reco-news-feed/RecoNewsFeedList";
import { AlertDashboard } from "@/components/common/AlertDashboard";

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
            <img
              src={bannerAds_2}
              alt="banner-advertising"
              className="block w-full h-full"
            />
          </div>
          <AlertDashboard />
        </section>
      </div>
    </div>
  );
};
