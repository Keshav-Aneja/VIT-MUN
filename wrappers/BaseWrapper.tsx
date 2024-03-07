import React from "react";
interface Props {
  children: React.ReactNode;
}
const BaseWrapper = ({ children }: Props) => {
  return <div className="w-full bg-white h-screen">{children}</div>;
};

export default BaseWrapper;
