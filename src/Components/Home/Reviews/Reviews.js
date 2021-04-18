import React, { useEffect, useState } from 'react';
import john from '../../../images/jon.jpg'
import SingleReview from '../SingleReview/SingleReview';


// const reviewData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'California',
//         img : john
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'California',
//         img : john
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aliza Farari',
//         from : 'California',
//         img : john
//     }
// ]

const Reviews = () => {

    const [reviewData, setReviewData] = useState([])

    useEffect(()=> {
        fetch('https://calm-island-96781.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviewData(data))
    }, [])


    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 style={{backgroundColor:'orange', padding:'1px'}} className=" text-center text-dark text-uppercase">Reviews</h5>
                <h1 className=" text-center text-dark text-uppercase">What Our Client Think <br/> <span style={{color:'orange'}}>About Us</span>  </h1>
            </div>
            <div className="mt-5 row d-flex justify-content-center">
                 {
                     reviewData.map(review => <SingleReview review={review}></SingleReview> )
                 }
             </div>
        </div>
    </section>
    );
};

export default Reviews;