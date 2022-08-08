import tw from 'twin.macro';
import { MainProduct } from './MainProduct';
import { ProductList } from './ProductList';

export const HomeSection = ({ imageCactus }) => {
    return (
        <div>
            <div tw='w-full h-screen flex'>
                <div tw='h-screen w-1/2 flex flex-col justify-center items-center px-10 gap-4'>
                    <MainProduct
                        image='/images/cactus_2.png'
                        name='Astrophytum Asterias V Type'
                        description='Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.'
                        price={10}
                    />
                </div>
                <div tw='h-screen w-1/2 flex flex-col justify-center items-center px-10'>
                    <div tw='h-4/5 w-full'>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
};
