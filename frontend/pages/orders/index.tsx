import { OrdersSection } from '../../components/orders/OrdersSection';
import { Background } from '../../components/shared/Background';

const Orders = () => {
    return (
        <div>
            <Background>
               <OrdersSection />
            </Background>
        </div>
    );
};

export default Orders;
