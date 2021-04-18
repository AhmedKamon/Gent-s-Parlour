import React from 'react';
import './Footer.css'
import facebook from '../../images/f.webp'
import twitter from '../../images/t.png'
import snapchat from '../../images/s.png'


const Footer = () => {
    return (
        <div class="footer-dark mt-5">
            <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Competitive Gamer</a></li>
                            <li><a href="#">Rank Push</a></li>
                            <li><a href="#">KD Increase</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Players</a></li>
                            <li><a href="#">Build A Team</a></li>
                            <li><a href="#">Awards</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>TEAM E-SPORT</h3>
                        <h5>Searching for a grate Barber ? <br/> Your are in a perfect place to <span style={{color:'orange', fontWeight:'bold'}}>HIRE</span> a barber. <br/> We have all kind of players like : Competitive player, Rank Push type player more and more.</h5>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"><img style={{height:'100%'}} src={facebook} alt=""/></i></a><a href="#"><i class="icon ion-social-twitter"><img style={{height:'100%', borderRadius:'50px'}} src={twitter} alt=""/></i></a><a href="#"><i class="icon ion-social-snapchat"><img style={{height:'100%', borderRadius:'50px'}} src={snapchat} alt=""/></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Jhanker Vhai © 2021</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;