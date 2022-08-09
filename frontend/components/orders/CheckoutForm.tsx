import tw from 'twin.macro';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { InputButton } from '../profile/InputButton';

const createCheckout = async (variantId: string) => {
    const res = await axios.post('http://0.0.0.0:5000/products/checkout', { variantId: variantId });
    console.log('=============', res.data.data.checkoutCreate.checkout.webUrl);
    const webURL = res.data.data.checkoutCreate.checkout.webURL;
    //TODO: Redirect this 'webUrl' on the button on Click
    // window.location.href = webUrl;
    return webURL;
};

export const CheckoutForm = ({ variantId }) => {
    createCheckout(variantId);
    console.log('recibido ', variantId);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const submit = handleSubmit(async (data) => {
        console.log('--- HANDLE SUBMIT CHECKOUT');
        //* Creo que aquí va la redirección
        // window.location.href = await createCheckout(variantId);
    });

    return (
        <div tw='flex flex-col justify-center items-center w-full h-screen'>
            <InputButton onClick={submit}>Buy product</InputButton>
        </div>
    );
};
