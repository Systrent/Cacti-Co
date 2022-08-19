import { ProductList } from '../home/ProductList';

export const OrdersSection = () => {
    return (
        <div tw='w-full h-screen px-10 py-24'>
            <div tw='w-full h-full flex justify-center items-center'>
                <ProductList />
            </div>
        </div>
    );
};
