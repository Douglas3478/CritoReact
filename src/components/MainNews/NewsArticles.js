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
import NewsArticlesBox from './NewsComponents/NewsArticlesBox'
import NewsSliderDots from './NewsComponents/NewsSliderDots'

const NewsArticles = () => {

    const articles = [
        {img: News_Two, title: "Business", description: "How To Implement Chat GPT In Your Projects", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: News_Three, title: "Business", description: "The Guide To Support Modern CSS Design", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Four, title: "Business", description: "Why You Need To Implement The Five S's", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Five, title: "Business", description: "Get More Involved With Your End Users", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Six, title: "Business", description: "Guided Tour Of Our New Head Office In Stockholm", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Seven, title: "Business", description: "Using Business Intelligence To Get Insights Into Our Businesses", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Eight, title: "Business", description: "Apple Has Released New Products. Are They Any Good?", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: Service_Nine, title: "Business", description: "How To Improve Your Teams And Get A Better Result", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
    ]
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
                {articles.map ((articles, index) =>(
                    <NewsArticlesBox key ={index} img={articles.img} title={articles.title} description={articles.description} text={articles.text} />
                ))}
            </div>
            <NewsSliderDots />
        </div>

    </section>
  )
}

export default NewsArticles