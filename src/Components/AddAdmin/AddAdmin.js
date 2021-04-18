import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const serviceDate = {
            admin: data.admin
        };


        const url =`https://calm-island-96781.herokuapp.com/addAdmin`
        console.log(serviceDate)

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceDate)
        })
        .then(res => console.log('server side res', res))
    };
    return (
        <div className="row">
            <div className="col-md-5 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 bg-dark pb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='text-white' htmlFor="">ADD EMAIL</label>
                <input className='form-control' placeholder='add email here' {...register("admin")} /> <br/><br/>
                <input className='form-control' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddAdmin;