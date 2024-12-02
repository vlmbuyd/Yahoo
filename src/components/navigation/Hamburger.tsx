import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import dropdownMenu from "@/assets/common/dropdown-menu.svg";
import profileImg from "@/assets/hamburger-icons/profile.svg";
import mailIcon from "@/assets/hamburger-icons/mail.svg";
import pinIcon from "@/assets/hamburger-icons/pin.svg";
import categoryData from "@/mock/sidebar-category-list.json";
import { sideBarType } from "@/types/sidebar-category";
import { Link } from "react-router-dom";

export const Hamburger = () => {
  const categoryGroups: sideBarType[] = categoryData.filter(
    (_, idx) => idx !== 0
  );

  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <button>
          <img src={dropdownMenu} alt="setting-icon" className="mr-[10px]" />
        </button>
      </SheetTrigger>

      <SheetContent
        side={"left"}
        className="min-w-[435px] h-screen bg-[white] overflow-auto"
      >
        <div className="flex flex-col items-center w-full h-screen pt-[9px] ">
          <div className="flex justify-start items-center w-full mb-[18px] ml-[9px]">
            <img
              src={profileImg}
              alt="profile-img"
              className="w-[68px] h-[68px] mr-[9px]"
            />
            <SheetTitle className="text-[14px] font-light text-[#555555]">
              <span className="font-medium text-[#000000]">ログイン </span>
              してください&gt;
            </SheetTitle>
          </div>

          <button className="flex justify-center items-center w-[344px] h-[52px] rounded-[25px] border border-solid border-[#BFBFC5] mb-[19px]">
            <img src={mailIcon} alt="mail-icon" />
          </button>

          {/* 즐겨찾기 */}
          <div className="relative w-[326px] h-[107px] mb-[20px]">
            <img
              src={pinIcon}
              alt="pin-icon"
              className="absolute top-[-10px] left-[-20px]"
            />
            <ul className="flex justify-around">
              {categoryData[0].map((item, idx) => (
                <Link to={item.url} className="hover:underline">
                  <li
                    key={`hamburger-pin-${idx}`}
                    className="flex flex-col justify-center items-center w-[90px] h-[101px]"
                  >
                    <img
                      src={item.imgUrl}
                      alt="pin-image"
                      className="w-[60px] h-[60px]"
                    />
                    <strong className="text-[10px] font-normal text-[#000000]">
                      {item.name}
                    </strong>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <ul className="w-[334px]">
            {categoryGroups.map((group, idx) => (
              <div
                key={`category-group-${idx}`}
                className="flex flex-col items-start w-full border border-solid border-[#7A42E8] rounded-[30px] pb-[4px] mb-[31px] bg-[white] last:mb-[22px] shadow-[2px_3px_10px_rgba(0,0,0,0.16)]"
              >
                <div className="flex justify-center items-center w-full h-[53px] border-b border-solid border-b-[#7A42E8] rounded-t-[30px]  mx-auto mb-[19px] bg-[#F1F3F5]">
                  <div>
                    <img
                      src={group[0].groupImgUrl}
                      alt="category-group-img"
                      className="mr-[10px]"
                    />
                  </div>
                </div>

                <ul className="flex flex-wrap justify-center items-center gap-x-[18px] gap-y-[10px]">
                  {group.map((item, idx) => (
                    <Link to={item.url}>
                      <li
                        key={`category-item-${idx}`}
                        className="flex flex-col justify-center items-center w-[90px] h-[101px] mb-[10px] hover:underline"
                      >
                        <img
                          src={item.imgUrl}
                          alt="category-image"
                          className="w-[60px] h-auto"
                        />
                        <strong className="text-[10px] font-normal text-[#000000]">
                          {item.name}
                        </strong>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </ul>

          <div className="flex justify-center items-center w-full h-[36px] border-t border-solid border-t-[#D5D5DA] mb-[26px]">
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
        </div>
      </SheetContent>
    </Sheet>
  );
};
