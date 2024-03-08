import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import Invitation from "@/screens/Invitation";
const invite = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <Invitation />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default invite;
