import { NewCactusForm } from "../../components/admin/NewCactusForm";
import { useModels } from "../../lib/models";

const Admin = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  return (
    <div
        className="h-screen w-full flex justify-center items-center"
    >
        <NewCactusForm /> 
    </div>
  );
};

export default Admin;
