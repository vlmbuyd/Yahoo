import { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[1320px] h-screen bg-gradient-to-b from-[#ffffff] from-0% via-[#FCFCFC] via-38% to-[#F8F9FA] my-0 mx-auto">
      {children}
    </div>
  );
};
