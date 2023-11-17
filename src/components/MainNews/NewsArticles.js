import React from 'react'
import News_One from '../../images/article_news_one.png'
import News_Two from '../../images/article_news_two.png'
import News_Three from '../../images/article_news_three.png'
import Service_Four from '../../images/service_four.png'
import Service_Five from '../../images/service_five.png'
import Service_Six from '../../images/service_six.png'
import Service_Seven from '../../images/service_seven.png'
import Service_Eight from '../../images/service_eight.png'
import Service_Nine from '../../images/service_nine.png'
import Digitalization from '../../views/Digitalization'
import { Link } from 'react-router-dom'

const NewsArticles = () => {

  return (
    <section className="news_articles_section">
        <div className="container">
            <div className="article_title">
                <div className="section_title">
                    <h2>Our News & Articles</h2>
                </div>
            </div>
            <div className="business_articles">
                <article>
                    <Link to="/Digitalization">
                        <img src={News_One}/>
                    </Link>
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={News_Two}/>
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={News_Three}/>
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
            </div>
            <div className="business_articles">
                <article>
                    <img src={Service_Four}/>
                    <p>Business</p>
                    <h3>Why You Need To Implement The Five S's</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={Service_Five}/>
                    <p>Business</p>
                    <h3>Get More Involved With Your End Users</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={Service_Six}/>
                    <p>Business</p>
                    <h3>Guided Tour Of Our New Head Office In Stockholm</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
            </div>
            <div className="business_articles">
                <article>
                    <img src={Service_Seven} />
                    <p>Business</p>
                    <h3>Using Business Intelligence To Get Insights Into Our Businesses</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={Service_Eight} />
                    <p>Business</p>
                    <h3>Apple Has Released New Products. Are They Any Good?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={Service_Nine} />
                    <p>Business</p>
                    <h3>How To Improve Your Teams And Get A Better Result</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
            </div>
            <div className="slider_dots">
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
            </div>
        </div>

    </section>
  )
}

export default NewsArticles