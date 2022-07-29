import { Section } from "../../components/home/Section";
import { useModels } from "../../lib/models";

const Orders = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div>
      <Section modelName={modelY.name} modelImage={modelY.img}/>
    </div>
  );
};

export default Orders;
