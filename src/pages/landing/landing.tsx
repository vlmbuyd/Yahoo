import { useVersionStore } from "@/store/version";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";

export const LandingPage = () => {
  const { setVersion } = useVersionStore(
    useShallow((state) => ({
      setVersion: state.setVersion,
    }))
  );
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <section className="flex mb-[150px]">
        <Link to="https://www.yahoo.co.jp/" target="_blank">
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            기존 야후
          </button>
        </Link>
        <Link to="/develop" target="_blank">
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            최종 개선안
          </button>
        </Link>
      </section>

      <section className="flex">
        <div className="flex flex-col">
          <Link to="/main" onClick={() => setVersion("pagination")}>
            <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
              페이지네이션 (기본)
            </button>
          </Link>
          <Link to="/main" onClick={() => setVersion("load-more")}>
            <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
              더보기
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <Link to="/main" onClick={() => setVersion("dropdown")}>
            <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
              드롭다운
            </button>
          </Link>
          <Link to="/main" onClick={() => setVersion("hamburger")}>
            <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
              햄버거
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
