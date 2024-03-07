import Header from "@/components/common/Header";
import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Landing from "@/screens/Landing";
const index = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <Landing />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default index;
