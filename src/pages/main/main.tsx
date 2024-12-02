import { CategoryNewsList } from "@/components/category-news-feed/CategoryNewsList";
import { SearchBar } from "@/components/header/SearchBar";
import { SideBar } from "@/components/navigation/SideBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";
import { RecoNewsFeedList } from "@/components/reco-news-feed/RecoNewsFeedList";
import { AlertDashboard } from "@/components/common/AlertDashboard";
import { useVersionStore } from "@/store/version";
import { useShallow } from "zustand/shallow";
import { BannerAds } from "@/components/banner-ads/BannerAds";
import { Header } from "@/components/header/Header";

export const MainPage = () => {
  const { version } = useVersionStore(
    useShallow((state) => ({
      version: state.version,
    }))
  );

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-[56px]">
      <Header />
      <SearchBar />

      <div className="flex justify-center w-full gap-[40px] px-[20px]">
        {(version === "pagination" || version === "load-more") && (
          <section>
            <SideBar />
          </section>
        )}

        <section className="flex flex-col flex-1 gap-[24px] min-w-[730px] max-w-[764px]">
          <CategoryNewsList />
          <BannerAds banner_num={1} />
          <RecoNewsFeedList />
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
