import { Section } from "../components/home/Section";
import { useModels } from "../lib/models";

const Contact = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div>
      <Section modelName={modelX.name} modelImage={modelX.img}/>
    </div>
  );
};

export default Contact;
