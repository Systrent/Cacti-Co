import tw from 'twin.macro';
import axios from 'axios';
import { InputButton } from '../profile/InputButton';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const createCheckout = async (variantId: string) => {
    const res = await axios.post('http://0.0.0.0:5000/products/checkout', { variantId: variantId });
    console.log('=============', res.data.data.checkoutCreate.checkout.webUrl, '=============');

    return res.data.data.checkoutCreate.checkout.webURL;
};

export const CheckoutForm = ({ variantId }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        createCheckout(variantId).then((myUrl) => {
            console.log('----TOKEN----', myUrl);
            setUrl(myUrl);
        });
    }, []);

    //*This way it shows the URL
    // createCheckout(variantId).then((x) => console.log(x));
    console.log('recibido ', variantId);

    return (
        <div tw='flex flex-col justify-center items-center w-full h-screen'>
            <a href={url} target='blank'>
                Buy product
            </a>
        </div>
    );
};
