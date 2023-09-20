import React from 'react';

const OrderDisplay = ({order}) => {
    const { customer_name, order_date, order_id, order_status, quantity, total_amount, product } = order;
    const { product_id, product_name } = product;
    return (
        <tr className='grid grid-cols-8 gap-4 hover:bg-accent hover:text-secondary items-center justify-items-start text-start py-1 border-b'>
            <td>{order_id}</td>
            <td>{customer_name}</td>
            <td>{order_date}</td>
            <td>{order_status}</td>
            <td>{quantity}</td>
            <td>{total_amount}</td>
            <td>{product_id}</td>
            <td>{product_name}</td>
        </tr>
    );
};

export default OrderDisplay;