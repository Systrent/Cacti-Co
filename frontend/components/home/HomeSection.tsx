import tw from 'twin.macro';
import { MainProduct } from './MainProduct';
import { ProductList } from './ProductList';
import { SectionTitle } from './SectionTitle';

export const HomeSection = () => {
    return (
        <>
            <section tw='w-full h-screen flex px-10 py-24 lg:(gap-4) gap-2'>
                <div tw='h-full w-1/2 flex justify-center items-center gap-2'>
                    <SectionTitle title={'Featured'} />
                    <MainProduct
                        image='/images/product_test.png'
                        name='Astrophytum Asterias Superkabuto V Type'
                        description="Contrary to the normal Astrophytum Superkabuto, that has only a mosaic of extensive rounded white dots the 'Zebra type' differs for the diverse pattern that form distinct v-shaped lines resembling the shape of fly's wings. This particular form is also called 'V-type', 'Fly's wings type' or 'Tiger' by Thai growers."
                        price={10}
                    />
                </div>
                <div tw='h-full w-1/2 flex justify-center items-center gap-2'>
                    <ProductList />
                    <SectionTitle title={'Products'} />
                </div>
            </section>
        </>
    );
};
