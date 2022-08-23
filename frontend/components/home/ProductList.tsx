import useSWR from 'swr';
import tw from 'twin.macro';
import { Spinner } from '../shared/Spinner';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
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

    const { data } = useSWR('/products', {
        refreshInterval: 4000,
    });

    const productsData = data?.data.products.edges;
    console.log(productsData);

    return (
        <div tw='h-full w-full flex flex-wrap gap-2 justify-end items-center overflow-auto pr-2'>
            {productsData?.length > 0 ? (
                productsData.map((item, index) => <ProductCard product={item.node} key={index} />)
            ) : (
                <div tw='w-full h-full flex justify-center items-center'>
                    <Spinner />
                </div>
            )}
        </div>
    );
};
