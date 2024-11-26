import { CategoryNewsList } from "@/components/common/CategoryNewsList";
import { Header } from "@/components/common/Header";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen pt-[56px]">
      <Header />
      <CategoryNewsList />
    </div>
  );
};
