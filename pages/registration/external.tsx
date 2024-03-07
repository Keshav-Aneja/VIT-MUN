import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import RegisterExternal from "@/screens/RegisterExternal";
const external = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <RegisterExternal />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default external;
