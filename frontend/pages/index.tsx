import { useModels } from "../lib/models";
import { HomeSection } from "../components/home/HomeSection";

const Page = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div>
      <HomeSection imageCactus={"images/cactus_2.png"}/>
    </div>
  );
};

export default Page;
