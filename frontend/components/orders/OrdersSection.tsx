import tw from 'twin.macro';
import { OrdersProductList } from './OrdersProductList';

export const OrdersSection = () => {
    return (
        <>
            <div tw='w-full h-screen px-10 py-24'>
                <div tw='w-full h-full flex justify-center items-center'>
                    <OrdersProductList />
                </div>
            </div>
        </>
    );
};
