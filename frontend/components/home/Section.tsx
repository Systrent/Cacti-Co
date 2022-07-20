import { css } from "@emotion/react";
import { Actions } from "./Actions";
import { Hero } from "./Hero";

export const Section = ({modelName, modelImage}) => {
  return (
    <div
      className="bg-transparent bg-no-repeat bg-cover bg-center h-screen w-full flex flex-col justify-center items-center "
      css={css`
        background-image: url(${modelImage});
      `}
    >
      <div
        className="flex flex-col justify-center items-center bg-transparent gap-[580px]"
      >
        <Hero labelTitle={modelName} labelSubTitle="Order Online for" aSubtitle="Touchless Delivery"/>
        <Actions />
      </div>
    </div>
  );
};