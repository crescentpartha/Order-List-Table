import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data[0].orders));
    }, [orders]);

    return [orders, setOrders];
}

export default useOrders;