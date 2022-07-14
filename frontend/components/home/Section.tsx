import { css } from "@emotion/react";
import { Actions } from "./Actions";
import { Hero } from "./Hero";
// import ImageLayout from "../shared/ImageLayout";

export const Section = ({modelName, modelImage}) => {
  return (
    <div
      css={css`
        scroll-snap-align: start none;
        background-color: transparent;
        background-image: url(${modelImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 106vh;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: -53px;
      `}
    >

      {/* 
      <div
        css={css`
          position: fixed;
          align-items: center;
          margin-top: -53px;
          width: 100%;
        `}
      >
      -------------------------------------------
        Quería reuttilizar el componente pero 
        el CSS no me permite usar el mismo estilo
        de 'background-size: cover' 
        y 'background-position: center'.
        O al menos no pude encontrar el cómo.
      -------------------------------------------
        <ImageLayout src="/images/model_X.jpg" width="2880" height="2400" alt="tesla_model_X"/>
      </div> 
      */}
    
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
        <Hero labelTitle={modelName} labelSubTitle="Order Online for" aSubtitle="Touchless Delivery"/>
        <Actions />
      </div>
    </div>
  );
};