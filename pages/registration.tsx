import React from "react";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import Register from "@/screens/Register";
const Registration = () => {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Header />
        </NavWrapper>
        <MainWrapper>
          <Register />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
};

export default Registration;
