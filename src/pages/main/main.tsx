import { CategoryNewsList } from "@/components/common/CategoryNewsList";
import { Header } from "@/components/common/Header";
import bannerAds_1 from "/banner-ads/banner-ads-1.webp";
import { SideBar } from "@/components/common/SideBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-[56px]">
      <Header />

      <div className="flex justify-center w-full gap-[40px] px-[20px]">
        {/* <section>
          <SideBar />
        </section> */}

        <section className="min-w-[730px] max-w-[764px]">
          <CategoryNewsList />
          <div className="w-full h-auto">
            <img
              src={bannerAds_1}
              alt="banner-advertising"
              className="block w-full object-fill"
            />
          </div>
        </section>

        <section className="flex-1 min-w-[290px] max-w-[384px]">
          <RealTimeSearchTrends />
        </section>
      </div>
    </div>
  );
};
