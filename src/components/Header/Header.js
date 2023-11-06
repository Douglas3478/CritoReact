import React from 'react'
import Logotype from '../../images/logotype.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="index.html"><img src={Logotype}/></a>
            <button className="menu_hamburger"><i className="fa-regular fa-burger"></i></button>
            <div className="menu">
                <div className="top_menu">
                    <div className="contact_menu">
                        <div className="contact_info">
                            <i className="fa-light fa-phone-volume"></i>
                            +46 (8)121 470 50
                        </div>
                        <div className="contact_info">
                            <i className="fa-light fa-envelope"></i> 
                            info@crito.com
                        </div>
                        <div className="contact_info last">
                            <i className="fa-light fa-location-dot"></i> 
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social_media">
                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="nav_menu">
                    <nav>
                        <a className="active" href="index.html">Menu</a>
                        <a href="#">Service</a>
                        <a href="#">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <a className="btn-login btn-nav" href="#">Login <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header