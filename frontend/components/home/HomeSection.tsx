import { MainProduct } from "./MainProduct";
import { ProductList } from "./ProductList";

export const HomeSection = ({imageCactus}) => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center px-32 bg-gradient-to-br from-[#393C54] via-[#45A79B] to-[#4BC190]"
    >
      <div
        className="h-screen w-1/2 flex flex-col justify-center items-center px-20"
      >
        <MainProduct image="images/cactus_1.png" name="Astrophytum Asterias V Type" description="Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje." price={10}/>

        <div
          className="h-20 w-full"
        >
          <ProductList />
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