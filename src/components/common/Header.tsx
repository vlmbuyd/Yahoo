import logo from "@/assets/common/yahoo-japan-logo.svg";
import weatherCloud from "@/assets/weather/weather_cloud.svg";
import searchIcon from "@/assets/icons/search.svg";
import optionIcon from "@/assets/icons/option.svg";

export const Header = () => {
  return (
    <header className="flex flex-col items-center my-0 mx-auto">
      <div className="flex justify-center mb-[30px]">
        <img src={logo} alt="yahoo-jp-logo" />
      </div>

      <div className="flex mb-[14px]">
        <div className="flex justify-center items-center w-[102px] h-[50px] rounded-[86px] border border-solid border-[#CFCFD9] mr-[10px] bg-[white] shadow-[1px_2px_10px_rgba(0,0,0,0.08)]">
          <img src={weatherCloud} alt="weather-icon" />
          <strong className="text-[13px] font-medium text-[#666666]">
            16C<span className="text-[#cfcfd9]"> | </span>10C
          </strong>
        </div>
        <div className="relative">
          <img
            src={searchIcon}
            alt="search-icon"
            className="absolute top-[50%] -translate-y-1/2 left-[24px]"
          />
          <input
            type="text"
            placeholder="search"
            className="w-[618px] h-[50px] pl-[54px] border border-solid border-[#4D45D6] rounded-[120px] bg-[white] text-[16px] font-normal text-[#555555] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#555555] focus:outline-none"
          />
          <img
            src={optionIcon}
            alt="search-icon"
            className="absolute top-[50%] -translate-y-1/2 right-[24px]"
          />
          <button className="absolute top-[50%] -translate-y-1/2 right-0 w-[76px] h-[50px] rounded-[69px] text-[16px] font-medium text-[white] bg-[#4D45D6] ">
            검색
          </button>
        </div>
      </div>

      <ul className="flex justify-between w-[602px]">
        <li className="text-[14px] font-normal text-[#555555]">
          &gt;をがな第三者家記事回避···
        </li>
        <li className="text-[14px] font-normal text-[#555555]">
          &gt;をがな第三者家記事回避···
        </li>
        <li className="text-[14px] font-normal text-[#555555]">
          &gt;をがな第三者家記事回避···
        </li>
      </ul>
    </header>
  );
};
