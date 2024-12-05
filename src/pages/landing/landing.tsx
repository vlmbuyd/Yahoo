import { useVersionStore } from "@/store/version";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import beforeImg from "@/assets/landing/before.svg";
import afterImg from "@/assets/landing/after.svg";
import paginationImg from "@/assets/landing/pagination.svg";
import loadMoreImg from "@/assets/landing/load-more.svg";
import dropdownImg from "@/assets/landing/dropdown.svg";
import hamburgerImg from "@/assets/landing/hamburger.svg";

export const LandingPage = () => {
  const { setVersion } = useVersionStore(
    useShallow((state) => ({
      setVersion: state.setVersion,
    }))
  );
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-[#ffffff] from-0% via-[#FCFCFC] via-38% to-[#F8F9FA] ">
      <section className="flex justify-between items-center w-[1077px] mb-[150px]">
        <div className="flex justify-center items-center h-[190px] mr-[32px]">
          <Link to="https://archive.md/VMbiP" target="_blank">
            <div className="relative w-[523px] h-[190px] rounded-[18px] mr-[50px]">
              <img
                src={beforeImg}
                alt="before-image"
                className="w-full h-auto"
              />
              <div
                className="absolute top-0 left-0 w-full h-[191px] rounded-[18px] hover:opacity-[70%]"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              ></div>
              <h2 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[60px] font-bold text-[white]">
                Before
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center h-[190px] mr-[32px]">
          <Link to="/develop" target="_blank">
            <div className="relative w-[523px] h-[190px] rounded-[18px] mr-[50px]">
              <img src={afterImg} alt="after-image" className="w-full h-auto" />
              <div
                className="absolute top-0 left-0 w-full h-[191px] rounded-[18px] hover:opacity-[70%]"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              ></div>
              <h2 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[60px] font-bold text-[white]">
                After
              </h2>
            </div>
          </Link>
        </div>
      </section>

      <section className="flex w-[1077px]">
        <Link to="/main" onClick={() => setVersion("pagination")}>
          <div className="w-[245px] h-[290px] pt-[48px] pl-[21px] mr-[50px] mb-[30px] rounded-[12px] bg-[#06B6FD] overflow-hidden">
            <h2 className="text-[30px] font-semibold mb-[50px]">
              Pagination <br />
              <span className="font-medium text-[#444444]">Ver.</span>
            </h2>
            <img
              src={paginationImg}
              alt="pagination-image"
              className="ml-[20px]"
            />
          </div>
        </Link>
        <Link to="/main" onClick={() => setVersion("load-more")}>
          <div className="w-[245px] h-[290px] pt-[48px] pl-[21px] mr-[50px] mb-[30px] rounded-[12px] bg-[#FEA903] overflow-hidden">
            <h2 className="text-[30px] font-semibold mb-[50px]">
              Load More <br />
              <span className="font-medium text-[#444444]">Ver.</span>
            </h2>
            <img src={loadMoreImg} alt="pagination-image" />
          </div>
        </Link>
        <Link to="/main" onClick={() => setVersion("dropdown")}>
          <div className="relative w-[245px] h-[290px] pt-[48px] pl-[21px] mr-[50px] mb-[30px] rounded-[12px] bg-[#A65900] overflow-hidden">
            <h2 className="text-[30px] font-semibold mb-[50px]">
              Dropdown <br />
              <span className="font-medium text-[#444444]">Ver.</span>
            </h2>
            <img
              src={dropdownImg}
              alt="pagination-image"
              className="absolute top-[140px] -left-[1px]"
            />
          </div>
        </Link>
        <Link to="/main" onClick={() => setVersion("hamburger")}>
          <div className="relative w-[245px] h-[290px] pt-[48px] pl-[21px] mr-[50px] mb-[30px] rounded-[12px] bg-[#008C01] overflow-hidden">
            <h2 className="text-[30px] font-semibold mb-[50px]">
              hamburger <br />
              <span className="font-medium text-[#444444]">Ver.</span>
            </h2>
            <img
              src={hamburgerImg}
              alt="pagination-image"
              className="absolute top-[140px] -left-[2px]"
            />
          </div>
        </Link>
      </section>
    </div>
  );
};
