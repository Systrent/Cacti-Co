import tw from 'twin.macro';
import { MainProduct } from './MainProduct';
import { ProductList } from './ProductList';

export const HomeSection = () => {
    return (
        <div tw='w-full h-screen flex px-10 py-24 gap-10'>
            <div tw='h-full w-1/2 flex flex-col justify-center items-center'>
                <MainProduct
                    image='/images/cactus_2.png'
                    name='Astrophytum Asterias V Type'
                    description='Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.'
                    price={10}
                />
            </div>
            <div tw='h-full w-1/2 flex flex-col justify-center items-center'>
                <ProductList />
            </div>
        </div>
    );
};
