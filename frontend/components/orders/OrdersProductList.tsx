import tw from 'twin.macro';
import useSWR from 'swr';
import { Spinner } from '../shared/Spinner';
import { OrdersProductCard } from './OrdersProductCard';
import { OrdersSectionTitle } from './OrdersSectionTitle';

export const OrdersProductList = () => {
    //*Validated

    // const { getAccessTokenSilently } = useAuth0();
    // const [token, setToken] = useState('');

    // useEffect(() => {
    //         getAccessTokenSilently().then(setToken);
    // }, []);

    // const { data } = useSWR('/products', authenticatedFetcher(token), {
    //     refreshInterval: 4000,
    // });

    // BACKEND: app.get('/', {preValidation: app.authenticate}, async (req, res) => {

    const { data } = useSWR('/products/all', {
        refreshInterval: 4000,
    });
    const productsData = data?.data.products.edges;

    return (
        <>
            <OrdersSectionTitle title={'Buy>now'} />
            <div tw='h-full w-full flex flex-wrap gap-2 justify-center items-center overflow-auto mr-2'>
                {productsData?.length > 0 ? (
                    productsData.map((item, index) => <OrdersProductCard product={item.node} key={index} />)
                ) : (
                    <div tw='w-full h-full flex justify-center items-center'>
                        <Spinner />
                    </div>
                )}
            </div>
            <OrdersSectionTitle title={'Buy<now'} />
        </>
    );
};
