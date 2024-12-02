import settingunActive from "@/assets/common/setting-unactive.svg";
import settingLarge from "@/assets/common/setting-large.svg";
import mailUnactive from "@/assets/common/mail-unactive.svg";
import dropdownMenu from "@/assets/common/dropdown-menu.svg";
import { useVersionStore } from "@/store/version";
import { useShallow } from "zustand/shallow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SideBar } from "../common/SideBar";

export const Header = () => {
  const { version } = useVersionStore(
    useShallow((state) => ({
      version: state.version,
    }))
  );

  return (
    <>
      <div className="flex justify-between absolute top-[20px] left-[20px] w-[1280px] h-[38px]">
        {version === "pagination" || version === "load-more" ? (
          <button className="flex justify-center items-center w-[127px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px]">
            <img
              src={settingunActive}
              alt="setting-icon"
              className="mr-[5px]"
            />
            <span className="text-[13px] font-medium text-[#444444]">
              ホーム設定
            </span>
          </button>
        ) : version === "dropdown" ? (
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <img
                    src={dropdownMenu}
                    alt="setting-icon"
                    className="mr-[10px]"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[bg-[salmon]">
                <SideBar />
              </DropdownMenuContent>
            </DropdownMenu>
            <button>
              <img src={settingLarge} alt="setting-icon" />
            </button>
          </div>
        ) : (
          <div className="flex">
            <button>
              <img
                src={dropdownMenu}
                alt="setting-icon"
                className="mr-[10px]"
              />
            </button>
            <button>
              <img src={settingLarge} alt="setting-icon" />
            </button>
          </div>
        )}

        <div className="flex">
          <button className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px] mr-[12px]">
            <img src={mailUnactive} alt="mail-icon" className="mr-[3px]" />
            <span className="text-[15px] font-medium text-[#444444]">
              メール
            </span>
          </button>
          <button className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px] mr-[12px] text-[15px] font-medium text-[#444444]">
            ログイン
          </button>
        </div>
      </div>
    </>
  );
};
