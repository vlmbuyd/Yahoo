import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <section className="flex mb-[150px]">
        <Link to="https://www.yahoo.co.jp/">
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            기존 야후
          </button>
        </Link>
        <Link to="/develop">
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            최종 개선안
          </button>
        </Link>
      </section>

      <section className="flex">
        <div className="flex flex-col">
          <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
            페이지네이션 (기본)
          </button>
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            더보기
          </button>
        </div>
        <div className="flex flex-col">
          <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
            드롭다운
          </button>
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            햄버거
          </button>
        </div>
      </section>
    </div>
  );
};
