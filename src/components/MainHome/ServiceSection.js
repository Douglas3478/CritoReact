import React from 'react'
import ServiceBox from './ServiceBox'
import lines from '../../images/element_right.png'
import SectionTitle from '../generics/SectionTitle'
import Button from '../generics/Button'

const ServiceSection = () => {

    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice",},
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startup",},
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice",},
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagement",},
    ]


  return (
    <section className="service_section">
            <div className="container">
                <SectionTitle title="We Provide The Best Service For Consulting" description="Our Services"/>
                <div className="service_advice">

                    {services.map ((service, index) => (
                        <ServiceBox key ={index} title={service.title} description={service.description} url={service.url}/>
                    ))}
                    
                    <img className="whitelines_service" src={lines} />
                </div>
                <div className="center_content">
                    <Button type="transparent" url="/services" title="Browse Services"/>
                </div>
            </div>
        </section>
  )
}

export default ServiceSection