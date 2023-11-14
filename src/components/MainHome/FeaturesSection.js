import React from 'react'
import business_icon from '../../images/business_icon.png'
import startup_icon from '../../images/startup_icon.png'
import financial_icon from '../../images/financial_icon.png'
import risk_icon from '../../images/risk_icon.png'
import FeatureBox from './MainComponents/FeatureBox'

const FeaturesSection = () => {

    const features = [
        { img: business_icon, title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
        { img: startup_icon, title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
        { img: financial_icon, title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
        { img: risk_icon, title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
    ]


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
                    {features.map ((features, index) => (
                            <FeatureBox key ={index} img={features.img} title={features.title} description={features.description} />
                        ))} 
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection