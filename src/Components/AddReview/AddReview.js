import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)




    const onSubmit = data => {
        const serviceDate = {
            name: data.name,
            quote: data.quote,
            from: data.from,
            imageURL: imageURL
        };

        const url =`https://calm-island-96781.herokuapp.com/addReview`

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



    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageDate = new FormData();
        imageDate.set('key', 'b6ee316af945dbda5d89d617c2ac6a29')
        imageDate.append('image', event.target.files[0])




        axios.post('https://api.imgbb.com/1/upload', imageDate )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row">
            <div className="col-md-5 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12 d-flex mt-5 pt-5 bg-dark justify-content-center">


                <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center text-white'>Add Review</h3>
                    <input className='form-control'    placeholder='Name Here' {...register("name")} />
                    <br />
                    <br />
                    <input className='form-control' placeholder='write something here'  {...register("quote", { required: true })} />
                    <br />
                    <br />
                    <input className='form-control' placeholder='country name'  {...register("from")} />
                    <br />
                    <br />
                    <input className='form-control' type='file' onChange={handleImageUpload} />
                    <br />
                    <br />

                    <input className='form-control' type="submit" />
                </form>


            </div>

        </div>
    );
};

export default AddReview;