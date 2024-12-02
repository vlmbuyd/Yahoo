import logo from "@/assets/common/yahoo-japan-logo.svg";
import weatherCloud from "@/assets/weather/weather_cloud.svg";
import searchIcon from "@/assets/icons/search.svg";
import optionIcon from "@/assets/icons/option.svg";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  return (
    <header className="flex flex-col items-center mb-[64px] mx-auto">
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
        <Link to="https://search.yahoo.co.jp/search?p=%E3%80%8C%E6%98%8E%E6%B2%BB%E3%80%8D%E3%81%AE%E5%89%8D%E3%81%AE%E5%85%83%E5%8F%B7%E3%82%92%E7%9F%A5&ei=UTF-8">
          <li className="text-[14px] font-normal text-[#555555]">
            &gt;「明治」の前の元号を知···
          </li>
        </Link>
        <Link to="https://search.yahoo.co.jp/search?p=%E5%A4%A7%E5%9C%B0%E9%9C%87%E3%81%8C%E3%81%8D%E3%81%9F%E3%82%89%E3%81%A9%E3%81%86%E3%81%99%E3%82%8B&x=wrt&aq=-1&ai=2b728e66-1447-423b-b476-746c9937d649&ts=854&ei=UTF-8">
          <li className="text-[14px] font-normal text-[#555555]">
            &gt;大地震がきたらどうする···
          </li>
        </Link>
        <Link to="https://search.yahoo.co.jp/search?p=%E3%81%8A%E3%81%9B%E3%81%A1%EF%BC%86%E5%B9%B4%E8%B6%8A%E3%81%97%E3%82%B0%E3%83%AB%E3%83%A1%E7%89%B9%E9%9B%86&x=wrt&aq=-1&ai=794cc04f-ba06-4708-b609-74c18e72c402&ts=1809&ei=UTF-8">
          <li className="text-[14px] font-normal text-[#555555]">
            &gt;おせち＆年越しグルメ特集
          </li>
        </Link>
      </ul>
    </header>
  );
};
