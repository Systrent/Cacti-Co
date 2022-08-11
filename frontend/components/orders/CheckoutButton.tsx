import tw from 'twin.macro';
import useSWR from 'swr';

export const CheckoutButton = ({ variantId }) => {
    const { data } = useSWR(`/products/checkout?variantId=${variantId}`);
    const url = data?.data.checkoutCreate.checkout.webUrl;

    return (
        <div tw='flex flex-col justify-center items-center w-full h-screen'>
            <a href={url} target='_blank'>
                Buy product
            </a>
        </div>
    );
};

// const createCheckout = async (variantId: string) => {
//     const res = await axios.post('http://localhost:5000/products/checkout', { variantId: variantId });
//     console.log('=============', res.data.data.checkoutCreate.checkout.webUrl, '=============');
//     console.log(res.data);
//     return res.data.data.checkoutCreate.checkout.webUrl;
// };

// export const CheckoutButton = ({ variantId }) => {
//     // const [url, setUrl] = useState('');

//     // useEffect(() => {
//     //     createCheckout(variantId).then((myUrl) => {
//     //         console.log('----URL----', myUrl);
//     //         setUrl(myUrl);
//     //     });
//     // }, []);
//     const { data } = useSWR(`/products/checkout?variantId=${variantId}`);
//     const url = data?.data.checkoutCreate.checkout.webUrl;
//     //*This way it shows the URL
//     // createCheckout(variantId).then((x) => console.log(x));
//     // console.log('recibido ', variantId);

//     return (
//         <div tw='flex flex-col justify-center items-center w-full h-screen'>
//             <a href={url} target='_blank'>
//                 Buy product
//             </a>
//         </div>
//     );
// };