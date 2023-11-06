import React from 'react'
import founder from '../../images/founder.png'

const AboutSection = () => {
  return (
    <section className="about_section">
        <div className="container">
            <div className="founder">
                <img src={founder} />
                <div className="founder_about">
                    <h4 className="section_title">Samantha Brown, <p>Founder</p></h4>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about_company">
                <div className="section_title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <p className="text_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p className="text_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>    
                <div className="learn_intro">
                    <button className="btn-black">Learn More <i className="fa-solid fa-arrow-up-right"></i></button>
                    <i className="fa-regular fa-circle-play"></i>
                    Intro Video
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection