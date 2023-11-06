import React from 'react'
import cassandra from '../../images/cassandra.png'
import amanda from '../../images/amanda.png'
import jack from '../../images/jack.png'

const TestimonialSection = () => {
  return (
    <section className="testimonial_section">
        <div className="container">
            <div className="section_title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="reviews">
                <article>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="review_all">
                        <div className="review_image">
                            <img src={cassandra} alt="" />
                        </div>
                        <div className="section_title">
                            <h3>Cassandra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div> 
                    </div> 
                </article>
                <article>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="review_all">
                        <div className="review_image">
                            <img src={amanda} alt="" />
                        </div>
                        <div className="section_title">
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div> 
                    </div> 
                </article>
                <article>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="review_all">
                        <div className="review_image">
                            <img src={jack} alt="" />
                        </div>
                        <div className="section_title">
                            <h3>Jack McDogglas</h3>
                            <p>Account Manager, Gobona</p>
                        </div> 
                    </div>    
                </article>
            </div>
            <div className="all_reviews">
                <button className="btn-black">All Reviews <i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection