import { Section } from "../components/home/Section";
import { useModels } from "../lib/models";

const About = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return(
    <div>
      <Section modelName={modelS.name} modelImage={modelS.img}/>
    </div>
  );
};

export default About;
