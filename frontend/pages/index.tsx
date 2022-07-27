import { useModels } from "../lib/models";
import { HomeSection } from "../components/home/HomeSection";

const Page = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div>
      <HomeSection imageCactus={"images/cactus_1.jpg"}/>
    </div>
  );
};

export default Page;
