import React from 'react'
import suitman from '../../images/Image.svg'
import whitelines_showcase from '../../images/Element.svg'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <div className="container">                    
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-login" href="#">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                <img className="whitelines_showcase" src={whitelines_showcase} alt="white lines overlapping" />
            </div>
            <img className="suitman" src={suitman} alt="image of a man in a suit with a tablet" />  
        </div>
    </section>
  )
}

export default ShowcaseSection