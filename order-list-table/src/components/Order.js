import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useOrders from '../hooks/useOrders';
import DisplayOrder from './OrderDisplay';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sortDate, setSortDate] = useState('');
    const [sortCustomerName, setSortCustomerName] = useState('');
    const [orderStatus, setOrderStatue] = useState('');
    const [productName, setProductName] = useState('');
    // console.log(orderStatus, productName);
    const [search, setSearch] = useState('');
    // console.log(search);
    const [orders] = useOrders({ orderStatus, productName });
    // console.log(orders);


    /* Sorting by Date, Customer_Name and Order_Id */

    // Sorting by Date
    function byDate(a, b) {
        // chronologically by year, month, then day
        return new Date(b.order_date).valueOf() - new Date(a.order_date).valueOf(); // timestamps
    }
    // console.log(orders.sort(byDate));
    if (sortDate === "Descending") orders.sort(byDate);

    // Sorting by Customer_Name Ascending Order
    function byCustomerNameAsc(a, b) {
        // Alphabetically by Name
        if (a.customer_name > b.customer_name) return 1;
        else if (b.customer_name > a.customer_name) return -1;
        else return 0;
    }
    // orders.sort(byCustomerNameAsc);
    if (sortCustomerName === "Ascending") orders.sort(byCustomerNameAsc);

    // Sorting by Customer_Name Descending Order
    function byCustomerNameDesc(a, b) {
        // Alphabetically by Name
        if (b.customer_name > a.customer_name) return 1;
        else if (a.customer_name > b.customer_name) return -1;
        else return 0;
    }
    // orders.sort(byCustomerNameDesc);
    if (sortCustomerName === "Descending") orders.sort(byCustomerNameDesc);

    // Sorting by Id Ascending Order
    function byIdAsc(a, b) {
        // numerically by id
        return parseInt(a.order_id) - parseInt(b.order_id);
    }
    // orders.sort(byIdAsc);

    // Sorting by Id Descending Order
    function byIdDesc(a, b) {
        // numerically by id
        return parseInt(b.order_id) - parseInt(a.order_id);
    }
    // orders.sort(byIdDesc);

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
            <form className='flex flex-row gap-2 my-2 py-5 rounded justify-center bg-accent' onSubmit={handleSubmit(onSubmit)}>

                {/* Order Status */}
                <div className='text-start'>
                    <select {...register("order_status", { required: "Select one option" })} defaultValue="" className='select select-primary w-full max-w-xs'>
                        <option value="">Select Order Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                    <label className="label">
                        {errors.order_status?.type === 'required' && <span className="label-text-alt text-error">{errors.order_status?.message}</span>}
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
                        {errors.product_name?.type === 'required' && <span className="label-text-alt text-error">{errors.product_name?.message}</span>}
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

            {/* Sorting by Date, Customer_Name */}
            <div className='flex flex-row gap-2 my-2 justify-center'>
                {/* Sorting by Date */}
                <div className='text-start'>
                    <select {...register("date", { required: "Select one option" })} defaultValue="" onChange={(e) => setSortDate(e.target.value)} className='select select-primary w-full max-w-xs'>
                        <option value="">Sort by Date</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>

                {/* Sorting by Customer_Name */}
                <div className='text-start'>
                    <select {...register("customer_name", { required: "Select one option" })} defaultValue="" onChange={(e) => setSortCustomerName(e.target.value)} className='select select-primary w-full max-w-xs'>
                        <option value="">Sort by Customer Name</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
            </div>

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