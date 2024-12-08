import { CategoryNewsList } from "@/components/category-news-feed/CategoryNewsList";
import { SearchBar } from "@/components/header/SearchBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";
import { AlertDashboard } from "@/components/common/AlertDashboard";
import { BannerAds } from "@/components/banner-ads/BannerAds";
import { Header } from "@/components/header/Header";
import { Pagination } from "@/components/reco-news-feed/Pagination";

export const DevelopPage = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-[56px]">
      <Header />
      <SearchBar />

      <div className="flex justify-center w-full gap-[40px] px-[20px]">
        <section className="flex flex-col flex-1 gap-[24px] min-w-[730px] max-w-[764px]">
          <CategoryNewsList />
          <BannerAds banner_num={1} />
          <Pagination />
        </section>

        <section className="flex flex-col flex-1 gap-[24px] min-w-[290px] max-w-[384px]">
          <RealTimeSearchTrends />
          <BannerAds banner_num={2} />
          <AlertDashboard />

          <div className="relative w-full ">
            <BannerAds banner_num={3} />
          </div>
        </section>
      </div>
    </div>
  );
};
