import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[1320px] h-screen bg-[skyblue] my-0 mx-auto">
      {children}
    </div>
  );
};
