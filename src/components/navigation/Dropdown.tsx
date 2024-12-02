import categoryData from "@/mock/sidebar-category-list.json";
import { sideBarType } from "@/types/sidebar-category";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dropdownMenu from "@/assets/common/dropdown-menu.svg";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import profileImg from "@/assets/common/profile-img.svg";

export const Dropdown = () => {
  const categoryGroups: sideBarType[] = categoryData;
  console.log(categoryGroups);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button>
          <img src={dropdownMenu} alt="setting-icon" className="mr-[10px]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="absolute top-0 left-[-20px] flex flex-col items-center w-[270px] pt-[20px] rounded-[10px]  bg-[#F1F3F5] shadow-[1px_2px_10px_rgba(0,0,0,0.05)] ">
        <DropdownMenuItem className="flex w-[185px] h-[44px] mb-[19px]">
          <img src={profileImg} alt="profile-img" className="mr-[9px]" />
          <strong className="flex items-center text-[12px] font-light text-[#555555]">
            <span className="font-medium text-[#000000]">ログイン</span>
            してください
          </strong>
        </DropdownMenuItem>
        <ul className="w-[186px]">
          {categoryGroups.map((group, idx) => (
            <ul
              key={`category-group-${idx}`}
              className="flex flex-col items-start border border-solid border-[#7A42E8] rounded-[14px] pt-[12px] pb-[4px] mb-[14px] bg-[white] last:mb-[22px]"
            >
              <div className="flex items-center w-[95%] h-[37px] border-b border-solid border-b-[#7A42E8] pl-[10px] mx-auto mb-[19px]">
                <div>
                  <img
                    src={group[0].groupImgUrl}
                    alt="category-group-img"
                    className="mr-[10px]"
                  />
                </div>
                <h3 className="text-[15px] font-semibold text-[#1d1d1d]">
                  {group[0].group}
                </h3>
              </div>
              {group.map((item, idx) => (
                <Link to={item.url} className="pl-[12px] w-full">
                  <li
                    key={`category-item-${idx}`}
                    className="flex items-center h-[24px] mb-[10px] hover:underline"
                  >
                    <img
                      src={item.imgUrl}
                      alt="category-image"
                      className="mr-[4px]"
                    />
                    <strong className="text-[12px] font-normal text-[#333333]">
                      {item.name}
                    </strong>
                  </li>
                </Link>
              ))}
            </ul>
          ))}
        </ul>

        <div className="flex justify-center items-center w-full h-[36px] border-t border-solid border-t-[#D5D5DA]">
          <button className="flex justify-center items-center  h-[22px]">
            <img
              src="/sidebar-category-icon/more-view.svg"
              alt="more-view-button"
              className="mr-[2px]"
            />
            <span className="text-[13px] font-normal text-[#4d45d6]">
              もっと見る
            </span>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
