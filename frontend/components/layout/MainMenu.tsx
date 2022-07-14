import HeaderButton from "./HeaderButton"
import { css } from "@emotion/react";
import { useModels } from "../../lib/models";

export const MainMenu = () => {
  const { modelS, model3, modelX, modelY } = useModels();
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <HeaderButton title={modelS.name}></HeaderButton>
      <HeaderButton title={model3.name}></HeaderButton>
      <HeaderButton title={modelX.name}></HeaderButton>
      <HeaderButton title={modelY.name}></HeaderButton>
      <HeaderButton title="Solar Roof"></HeaderButton>
      <HeaderButton title="Solar Panels"></HeaderButton>
    </div>
  );
};
