import React from 'react';
import useOrders from '../hooks/useOrders';
import DisplayOrder from './OrderDisplay';

const Order = () => {
    const [orders] = useOrders();
    // console.log(orders);

    return (
        <div className='m-10'>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-secondary text-center uppercase">List of Orders</h2>

            {/* Display all orders data by fetching data from order API */}
            <div className="overflow-auto">
                <table className="xl:w-full" width='1280px'>
                    <thead>
                        <tr className='grid grid-cols-8 gap-4 bg-warning text-secondary items-center justify-items-start text-start uppercase py-1'>
                            <td>Order ID</td>
                            <td>Customer Name</td>
                            <td>Order Date</td>
                            <td>Order Status</td>
                            <td>Quantity</td>
                            <td>Total Amount</td>
                            <td>Product ID</td>
                            <td>Product Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // orders.map(order => console.log(order))
                            orders.map(order => <DisplayOrder
                                key={order.order_id}
                                order={order}
                            ></DisplayOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;