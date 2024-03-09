import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import Committee from "@/screens/Committee";
const committees = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <Committee />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default committees;
