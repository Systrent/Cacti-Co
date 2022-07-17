import { css } from "@emotion/react";
import { HeaderButton } from "./HeaderButton"
import { useModels } from "../../lib/models";
import { LoginButton } from "./LoggingButton";

export const MainMenu = () => {
  const { modelS, model3, modelX, modelY } = useModels();
  return (
    <div 
      className="flex justify-center gap-20"
    >
      <div>
        <HeaderButton title="Home" />
        <HeaderButton title="About" />
        <HeaderButton title="Orders" />
        <HeaderButton title="Contact" />
      </div>
      <div>
        <LoginButton/>
      </div>
    </div>
    
  );
};
