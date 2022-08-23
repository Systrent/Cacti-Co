import tw from 'twin.macro';
import { ProductList } from '../home/ProductList';

export const OrdersSection = () => {
    return (
        <section>
            <div tw='w-full h-screen px-10 py-24'>
                <div tw='w-full h-full flex justify-center items-center'>
                    <ProductList />
                </div>
            </div>
        </section>
    );
};
