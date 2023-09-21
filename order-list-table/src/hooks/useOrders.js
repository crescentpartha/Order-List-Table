import { useEffect, useState } from "react";

const useOrders = ({orderStatus, productName}) => {
    const [orders, setOrders] = useState([]);
    // console.log(orderStatus, productName);

    useEffect(() => {
        const url = `http://localhost:5000/order?order_status=${orderStatus}&product_name=${productName}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, orderStatus, productName]);

    return [orders, setOrders];
}

export default useOrders;