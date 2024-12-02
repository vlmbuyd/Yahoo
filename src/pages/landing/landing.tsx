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
            Before
          </button>
        </Link>
        <Link to="/develop" target="_blank">
          <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
            After
          </button>
        </Link>
      </section>

      <section className="flex">
        <div className="flex flex-col">
          <Link to="/main" onClick={() => setVersion("pagination")}>
            <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
              Pagination (Basic)
            </button>
          </Link>
          <Link to="/main" onClick={() => setVersion("load-more")}>
            <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
              Load More
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <Link to="/main" onClick={() => setVersion("dropdown")}>
            <button className="w-[300px] h-[150px] mr-[50px] mb-[30px] bg-slate-500">
              Dropdown
            </button>
          </Link>
          <Link to="/main" onClick={() => setVersion("hamburger")}>
            <button className="w-[300px] h-[150px] mr-[50px] bg-slate-500">
              Hamburger
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
