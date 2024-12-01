import { CategoryNewsList } from "@/components/category-news-feed/CategoryNewsList";
import { Header } from "@/components/common/Header";
import { SideBar } from "@/components/common/SideBar";
import { RealTimeSearchTrends } from "@/components/common/RealTimeSearchTrends";
import { RecoNewsFeedList } from "@/components/reco-news-feed/RecoNewsFeedList";
import { AlertDashboard } from "@/components/common/AlertDashboard";
import { useVersionStore } from "@/store/version";
import { useShallow } from "zustand/shallow";
import settingIcon from "@/assets/common/setting.svg";
import mailIcon from "@/assets/common/mail.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dropdownMenu from "@/assets/common/dropdown-menu.svg";
import settingNormalIcon from "@/assets/common/setting-normal.svg";
import { BannerAds } from "@/components/banner-ads/BannerAds";

export const MainPage = () => {
  const { version } = useVersionStore(
    useShallow((state) => ({
      version: state.version,
    }))
  );

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-[56px]">
      <div className="flex justify-between absolute top-[20px] left-[20px] w-[1280px] h-[38px]">
        <button className="flex justify-center items-center w-[127px] h-[38px] border border-solid border-[#4D45D6] rounded-[78px]">
          <img src={settingIcon} alt="setting-icon" className="mr-[5px]" />
          <span className="text-[13px] font-medium text-[#4D45D6]">
            ホーム設定
          </span>
        </button>

        <div className="flex">
          <button className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#4D45D6] rounded-[78px] mr-[12px]">
            <img src={mailIcon} alt="mail-icon" className="mr-[3px]" />
            <span className="text-[15px] font-medium text-[#4D45D6]">
              メール
            </span>
          </button>
          <button className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#4D45D6] rounded-[78px] mr-[12px] text-[15px] font-medium text-[#4D45D6]">
            ログイン
          </button>
        </div>
      </div>

      <Header />

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
