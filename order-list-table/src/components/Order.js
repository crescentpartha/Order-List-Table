import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useOrders from '../hooks/useOrders';
import DisplayOrder from './OrderDisplay';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderStatus, setOrderStatue] = useState('');
    const [productName, setProductName] = useState('');
    // console.log(orderStatus, productName);
    const [search, setSearch] = useState('');
    // console.log(search);
    const [orders] = useOrders({orderStatus, productName});
    // console.log(orders);

    const onSubmit = (data) => {
        // console.log(data);
        setProductName(data?.product_name);
        setOrderStatue(data?.order_status);
    }

    return (
        <div className='m-10'>

            {/* Text field to Search */}
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by customer name..."
                className="input input-bordered input-primary w-full max-w-xs"
            />

            {/* Implement filter functionality for order_status */}
            <form className='flex flex-row gap-2 my-2 justify-center' onSubmit={handleSubmit(onSubmit)}>

                {/* Order Status */}
                <div className='text-start'>
                    <select {...register("order_status", { required: "Select one option" })} defaultValue="" className='select select-primary w-full max-w-xs'>
                        <option value="">Select Order Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                    <label className="label">
                        {errors.gender?.type === 'required' && <span className="label-text-alt text-error">{errors.gender?.message}</span>}
                    </label>
                </div>

                {/* Product Name */}
                <div className='text-start'>
                    <select {...register("product_name", { required: "Select one option" })} defaultValue="" className='select select-primary w-full max-w-xs'>
                        <option value="">Select Product Name</option>
                        <option value="Product A">Product A</option>
                        <option value="Product B">Product B</option>
                        <option value="Product C">Product C</option>
                        <option value="Product D">Product D</option>
                        <option value="Product E">Product E</option>
                    </select>
                    <label className="label">
                        {errors.type?.type === 'required' && <span className="label-text-alt text-error">{errors.type?.message}</span>}
                    </label>
                </div>

                {/* Filter */}
                <div>
                    <input
                        className='btn btn-md btn-primary btn-wide'
                        type="submit"
                        value="Filter"
                    />
                </div>
            </form>

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