import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../../Pages/DashBoard/Sidebar/SideBar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    let history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/orderList`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data)
        })
    }, [])

    console.log(orders);


    return (
        <div className=" row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h1>Order List</h1>
                <table  className=" w-75  table table-secondary mt-5">
                    <thead>
                        <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                  orders.map((order, index) =>       
                    <tr key={order._id}>
                        <td>{index+1}</td>
                        <td>{order.shipmentData.name}</td>
                        <td>{order.shipmentData.email}</td>
                        
                    </tr>
                    )
                }
            </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;