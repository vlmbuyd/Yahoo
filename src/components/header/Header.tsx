import settingActive from "@/assets/common/setting-active.svg";
import settingUnactive from "@/assets/common/setting-unactive.svg";
import settingLarge from "@/assets/common/setting-large.svg";
import mailUnactive from "@/assets/common/mail-unactive.svg";
import mailActive from "@/assets/common/mail-active.svg";
import { useVersionStore } from "@/store/version";
import { useShallow } from "zustand/shallow";
import { Dropdown } from "../navigation/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../navigation/Hamburger";

export const Header = () => {
  const { version } = useVersionStore(
    useShallow((state) => ({
      version: state.version,
    }))
  );
  const [isMailHovered, setIsMailHovered] = useState<boolean>(false);
  const [isSettingHovered, setIsSettingHovered] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between absolute top-[20px] left-[20px] w-[1280px] h-[38px]">
        {version === "pagination" ||
          (version === "load-more" && (
            <button
              className="flex justify-center items-center w-[127px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px]
            hover:border-[#7A42E8]"
              onMouseEnter={() => setIsSettingHovered(true)}
              onMouseLeave={() => setIsSettingHovered(false)}
            >
              <img
                src={isSettingHovered ? settingActive : settingUnactive}
                alt="setting-icon"
                className="mr-[5px]"
              />
              <span className="text-[13px] font-medium text-[#444444] hover:text-[#7A42E8]">
                ホーム設定
              </span>
            </button>
          ))}
        {version === "dropdown" && (
          <div className="flex">
            <Dropdown />
            <button>
              <img src={settingLarge} alt="setting-icon" />
            </button>
          </div>
        )}

        {version === "hamburger" && (
          <div className="flex">
            <button>
              <Hamburger />
            </button>
            <button>
              <img src={settingLarge} alt="setting-icon" />
            </button>
          </div>
        )}
        <div className="flex">
          <Link to="https://login.yahoo.co.jp/config/login?.src=www&.done=https%3A%2F%2Fwww.yahoo.co.jp%2F">
            <button
              className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px] mr-[12px]
                     hover:border-[#7A42E8]"
              onMouseEnter={() => setIsMailHovered(true)}
              onMouseLeave={() => setIsMailHovered(false)}
            >
              <img
                src={isMailHovered ? mailActive : mailUnactive}
                alt="mail-icon"
                className={`flex justify-center items-center`}
              />
              <span className="text-[15px] font-medium text-[#444444] hover:text-[#7A42E8]">
                メール
              </span>
            </button>
          </Link>
          <Link to="https://login.yahoo.co.jp/config/login?.src=www&.done=https%3A%2F%2Fwww.yahoo.co.jp%2F">
            <button
              className="flex justify-center items-center w-[90px] h-[38px] border border-solid border-[#CFCFD9] rounded-[78px] mr-[12px] text-[15px] font-medium text-[#444444]
          hover:text-[#7A42E8] hover:border-[#7A42E8]
          "
            >
              ログイン
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
