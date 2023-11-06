import React from 'react'
import logo_white from '../../images/logo_white.png'

const SummarySection = () => {
  return (
    <section className="summary">
        <div className="container">
            <div className="end_logo">
                <img src={logo_white} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="end_links">
                <div className="summary_end">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="summary_end">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="summary_end">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
                <div className="summary_end">
                    <h3>Link</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SummarySection