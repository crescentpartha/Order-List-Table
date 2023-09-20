import React, { useState } from 'react';
import useOrders from '../hooks/useOrders';
import DisplayOrder from './OrderDisplay';

const Order = () => {
    const [search, setSearch] = useState('');
    // console.log(search);
    const [orders] = useOrders();
    // console.log(orders);

    return (
        <div className='m-10'>

            {/* Text field to Search */}
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by customer name..."
                className="input input-bordered input-primary w-full max-w-xs"
            />

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
                            orders.filter((item) => {
                                // One way to filter
                                // return search.toLowerCase() === ''
                                //     ? item
                                //     : item.customer_name?.toLowerCase().includes(search)

                                return item.customer_name.toLowerCase().startsWith(search.toLowerCase()) // Another way to filter
                            }).map(order => <DisplayOrder
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