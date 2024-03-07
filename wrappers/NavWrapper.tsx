import React from "react";
interface Props {
  children: React.ReactNode;
}
const NavWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-[15%] sticky top-0 left-0 bg-white z-[150]">
      {children}
    </div>
  );
};

export default NavWrapper;
