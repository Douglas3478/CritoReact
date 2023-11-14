import React from 'react'
import process_icon from '../../images/process_icon.png'
import strategic_icon from '../../images/strategic_icon.png'
import experience_icon from '../../images/experience_icon.png'
import artificial_icon from '../../images/artificial_icon.png'
import why_chose_us from '../../images/why_chose_us.png'
import WhyUsBox from './MainComponents/WhyUsBox'

const WhyUsSection = () => {

    const whyus = [
        { img: process_icon, title: "Process Excellence", description: "Lorem ipsum, dolor sit amet consectetur."},
        { img: strategic_icon, title: "Strategic Planning", description: "Lorem ipsum, dolor sit amet consectetur."},
        { img: experience_icon, title: "Experience Design", description: "Lorem ipsum, dolor sit amet consectetur."},
        { img: artificial_icon, title: "Artificial Inteligenece", description: "Lorem ipsum, dolor sit amet consectetur."},
    ]

  return (
    <section className="why_us_section">
        <div className="container">
            <div className="why_text">
                <div className="section_title">
                    
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="consulting_agency">

                    {whyus.map ((whyus, index) => (
                        <WhyUsBox key ={index} img={whyus.img} title={whyus.title} description={whyus.description} />
                    ))}
                </div>
            </div>
            <div className="meeting_big">
                <div className="meeting_img">
                    <img src={why_chose_us} />
                </div>
                <div className="meeting"></div>
            </div>
        </div>
    </section>
  )
}

export default WhyUsSection