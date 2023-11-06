import React from 'react'
import process_icon from '../../images/process_icon.png'
import strategic_icon from '../../images/strategic_icon.png'
import experience_icon from '../../images/experience_icon.png'
import artificial_icon from '../../images/artificial_icon.png'
import why_chose_us from '../../images/why_chose_us.png'

const WhyUsSection = () => {
  return (
    <section className="why_us_section">
        <div className="container">
            <div className="why_text">
                <div className="section_title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="consulting_agency">
                    <article>
                        <img src={process_icon} />
                        <h3>Process Excellence</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={strategic_icon} />
                        <h3>Strategic Planning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={experience_icon} />
                        <h3>Experience Design</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={artificial_icon} />
                        <h3>Artificial Inteligenece</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
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