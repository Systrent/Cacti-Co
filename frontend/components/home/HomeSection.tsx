import { MainProduct } from "./MainProduct";

export const HomeSection = ({imageCactus}) => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center px-32 bg-gradient-to-br from-[#393C54] via-[#45A79B] to-[#4BC190]"
    >
      <div
        className="h-screen w-1/2 flex flex-col justify-center items-center px-20"
      >
        <MainProduct image="images/cactus_1.png" name="Astrophytum Asterias V Type" description="Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje."/>
        
        <div
          className="flex justify-center items-center"
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
      <div
        className="h-screen w-1/2 flex flex-col justify-center items-center"
      >
        <div>
          TEXT
        </div>
        <div>
          BOTON
        </div>
      </div>
    </div>
  );
};