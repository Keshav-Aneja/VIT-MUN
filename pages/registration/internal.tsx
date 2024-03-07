import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import RegisterInternal from "@/screens/RegisterInternal";
const internal = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <RegisterInternal />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default internal;
