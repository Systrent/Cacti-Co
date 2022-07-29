import { HeaderButton } from "./HeaderButton"
import { useModels } from "../../lib/models";
import { LoginButton } from "./LoginButton";

export const MainMenu = () => {
  //const { modelS, model3, modelX, modelY } = useModels();
  return (
    <div 
      className="flex justify-center items-center gap-20"
    >
      <div>
        <HeaderButton title="Home" href="/" />
        <HeaderButton title="Orders" href="/orders" />
        <HeaderButton title="Contact" href="/contact" />
        <HeaderButton title="Admin" href="/admin" />
      </div>
      <div>
        <LoginButton/>
      </div>
    </div>
    
  );
};
