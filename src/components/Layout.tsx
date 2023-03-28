import React, { FC } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <Header />
      <div className="h-full w-full overflow-auto ">{children}</div>
    </div>
  );
};
