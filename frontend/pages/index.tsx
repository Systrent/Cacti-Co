import { Section } from "../components/home/Section";
import { useModels } from "../lib/models";
import { css } from "@emotion/react";
import { HomeSection } from "../components/home/HomeSection";

const Page = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div css={css`
        scroll-snap-type: y mandatory;
      `}
    >
      <HomeSection />
      <Section modelName={modelS.name} modelImage={modelS.img}/>
      <Section modelName={model3.name} modelImage={model3.img}/>
      <Section modelName={modelX.name} modelImage={modelX.img}/>
      <Section modelName={modelY.name} modelImage={modelY.img}/>
    </div>
  );
};

export default Page;
