import { css } from "@emotion/react";
import ImageLayout from "../shared/ImageLayout";
import { Actions } from "./Actions";
import { Hero } from "./Hero";

// export const HomeSection = ({modelName, modelImage}) => {
export const HomeSection = () => {
  return (
    <div
      css={css`
        background-color: #E7E8E3;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
        `}>
        <ImageLayout src="/images/cacti_co_logo.svg" width="300" height="300" alt="cacti_co_logo" />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          gap: 580px;
        `}
      >
      
        {/* <Hero labelTitle={modelName} labelSubTitle="Order Online for" aSubtitle="Touchless Delivery"/>
        <Actions /> */}
      </div>
    </div>
  );
};