import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        fetch('https://calm-island-96781.herokuapp.com/orderData?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 col-sm-12 col-12 ">
                    <h3 className='text-center' > you have {orderData.length} Orders</h3>
                    <table className="table shadow">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">service Name</th>
                                <th className="text-secondary" scope="col">User Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Mobile</th>
                                <th className="text-secondary" scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData.map( order =>

                                    <tr>
                                        <td>{order.serviceName}</td>
                                        <td>{order.userName}</td>
                                        <td>{order.userEmail}</td>
                                        <td>{order.mobile}</td>
                                        <td>{order.address}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;