import React from 'react'
import news_one from '../../images/article_news_one.png'
import news_two from '../../images/article_news_two.png'
import news_three from '../../images/article_news_three.png'
import { NavLink } from 'react-router-dom'
import apicontext from '../../views/Apicontext'

const ArticleNewsSection = () => {
  return (
    <section className="article_news">
            <div className="container">
                <div className="article_title">
                    <div className="section_title">
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="browse_articles">
                    <NavLink to="/apicontext">
                        <button className="btn-transparent">
                            Browse Articles <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                    </NavLink>
                    </div>
                </div>
                <div className="business_articles">
                    <article>
                        <img src={news_one} />
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={news_two} />
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={news_three} />
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                </div>
                <div className="slider_dots">
                    <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                </div>
            </div>
        </section>
  )
}

export default ArticleNewsSection