import React from 'react'
import business_icon from '../../images/business_icon.png'
import startup_icon from '../../images/startup_icon.png'
import financial_icon from '../../images/financial_icon.png'
import risk_icon from '../../images/risk_icon.png'

const FeaturesSection = () => {
  return (
    <section className="features_section">
        <div className="features_border">
            <div className="container">
                <div className="section_title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <button className="btn-login">Learn More <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
                <div className="business_advice">
                    <article>
                        <img src={business_icon} />
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={startup_icon} />
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={financial_icon} />
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={risk_icon} />
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection