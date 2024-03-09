import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";
import RegisterExternal from "@/screens/RegisterExternal";
const external = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 2.5,
          smoothWheel: true,
          syncTouch: true,
          syncTouchLerp: 0.04,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <BaseWrapper>
          <NavWrapper>
            <Header />
          </NavWrapper>
          <MainWrapper>
            <RegisterExternal />
          </MainWrapper>
        </BaseWrapper>
      </ReactLenis>
    </>
  );
};

export default external;
