import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Dashboard.css'
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import Payment from '../../Payment/Payment';
import { Link } from "react-router-dom";
require('bootstrap');



const Dashboard = () => {
    const [orderData, setOrderDate] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const UserDate = {
            serviceName: items.name,
            userName: loggedInUser.displayName,
            userEmail: loggedInUser.email,
            mobile: data.mobile,
            address: data.address
        }
        console.log(UserDate)
        alert('Ordered successfully. check your order in ORDERS')
        const url = `https://calm-island-96781.herokuapp.com/orderData`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserDate)
        })
            .then(res => console.log('server side res', res))

    };



    const { id } = useParams();
    const [item, setItem] = useState([])

    const items = item.find(i => i._id == id)
    console.log(items)





    useEffect(() => {
        fetch('https://calm-island-96781.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 row col-sm-12 col-12 m-0 bg-dark text-white">
                    <h4> Service Name: {items?.name}</h4>
                    <h4> User Name: {loggedInUser?.displayName}</h4>
                    <img style={{ height: '150px' }} src={items?.imageURL} alt="" />
                    <p>{items?.description}</p>
                    <h3 > Quantity: 1 </h3>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">MOBILE NUMBER</label>
                            <input className='form-control' placeholder='Mobile Number' {...register("mobile", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <br />
                            <label htmlFor="">ADDRESS</label>
                            <input placeholder='Address Here' className='form-control' {...register("address", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <br />
                            <label htmlFor="">PAYMENT</label>
                            <div style={{border:'1px solid white', padding:'1%'}}>
                                <Payment></Payment>
                                
                            </div>
                            <small className='text-success'> price: {items?.price} $</small>
                            <br />
                            <br />

                            <input className='form-control' className='btn btn-info' type="submit" value='Order Now' />
                            <br/>
                            <br/>
                        </form>
                    </div>

                    {/* <button className='btn btn-info p-0 m-0'> Place Order Now</button> */}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;