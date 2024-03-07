import React from "react";
interface Props {
  children: React.ReactNode;
}
const MainWrapper = ({ children }: Props) => {
  return <div className="w-full min-h-[85%] ">{children}</div>;
};

export default MainWrapper;
