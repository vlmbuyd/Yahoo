import { CategoryNewsList } from "@/components/common/CategoryNewsList";
import { Header } from "@/components/common/Header";
import bannerAds_1 from "/banner-ads/banner-ads-1.webp";
import { SideBar } from "@/components/common/SideBar";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-[56px]">
      <Header />

      <div className="flex justify-center w-full gap-[40px]">
        <section>
          <SideBar />
        </section>

        <section>
          <CategoryNewsList />
          <div className="min-w-[730px] max-w-[764px] h-auto">
            <img
              src={bannerAds_1}
              alt="banner-advertising"
              className="block w-full object-fill"
            />
          </div>
        </section>

        <section className="w-[290px] h-[320px] bg-[salmon]"></section>
      </div>
    </div>
  );
};
