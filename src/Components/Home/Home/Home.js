import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import BlackSale from '../BlackSale/BlackSale';
import Projects from '../Projects/Projects';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Reviews></Reviews>
            <BlackSale></BlackSale>
            <Footer></Footer>
        </div>
    );
};

export default Home;