import tw from 'twin.macro';
import { MainProduct } from './MainProduct';
import { ProductList } from './ProductList';
import { SectionTitle } from './SectionTitle';

export const HomeSection = () => {
    return (
        <section tw='w-full h-screen flex px-10 py-24 lg:(gap-4) gap-2'>
            <div tw='h-full w-1/2 flex justify-center items-center gap-2'>
                <SectionTitle title={'Featured'} />
                <MainProduct
                    image='/images/cactus_2.png'
                    name='Astrophytum Asterias V Type'
                    description='Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.'
                    price={10}
                />
            </div>
            <div tw='h-full w-1/2 flex justify-center items-center gap-2'>
                <ProductList />
                <SectionTitle title={'Products'} />
            </div>
        </section>
    );
};
