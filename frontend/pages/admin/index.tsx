import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { NewCactusForm } from "../../components/admin/NewCactusForm";
import { useModels } from "../../lib/models";

const Admin = () => {
  const { modelS, model3, modelX, modelY } = useModels();

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then( token => {;
      console.log("----TOKEN----", token);
    })
  }, []);

  return (
    <div
        className="h-screen w-full flex justify-center items-center"
    >
      <NewCactusForm />
    </div>
  );
};

export default Admin;
