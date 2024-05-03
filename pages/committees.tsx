import React from "react";
import ReactLenis from "@studio-freight/react-lenis/types";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import Committee from "@/screens/Committee";
const committees = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 2.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <BaseWrapper>
          <NavWrapper>
            <Header />
          </NavWrapper>
          <MainWrapper>
            <Committee />
          </MainWrapper>
        </BaseWrapper>
      </ReactLenis>
    </>
  );
};

export default committees;
