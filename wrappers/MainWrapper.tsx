import React from "react";
interface Props {
  children: React.ReactNode;
}
const MainWrapper = ({ children }: Props) => {
  return <div className="w-full h-[90%] md:h-[88%] ">{children}</div>;
};

export default MainWrapper;
