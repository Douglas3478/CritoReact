import React from 'react'
import News_Kimb from '../../../images/news_kimberly.png'
import Quote_News from '../../../images/img_quote.png'
import ArticlesOneBox from './ArticlesComponents/ArticlesOneBox'
import ArticlesOneCategories from './ArticlesComponents/ArticlesOneCategories'
import Button from './ArticlesComponents/ArticlesOneButtons'
const ArticlesOne = () => {

    const articles = [
        { title: "How To Blow Through Capital At An Incredible Rate", description: "Jan 14 2020"},
        { title: "Design Studios That Everyone Should Know About?", description: "Jan 14 2020"},
        { title: "How did we get 1M+ visitors in 30 days without anything!", description: "Jan 14 2020"},
        { title: "Figma On Figma: How We Built Our Website Design System", description: "Jan 14 2020"},
    ]
  return (
    <section className="classroom_kimberly">
        <div className="container">
            <div className="howtoclassroom">
                <div className="kimberly_title">
                    <h2>How To Use Digitalization In The Classroom</h2>
                </div>
                <div className="title_dates">
                    <p>Mar 25, 2023</p>
                    <p>Business</p>
                    <p>Kimberly Hansen</p>
                </div>
            </div>
            <div className="news_article">
                <div className="article_kimberly">
                    <img src={News_Kimb}/>
                    <div className="text_news">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br />
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br />
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br />
                                
                            </p>
                        <div className="quote_news">
                            <img src={Quote_News}/>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        </div>
                        <div className="moretext_news">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        </div>
                        <div className="news_button">
                            <Button text="Digitalization"/>
                            <Button text="School"/>
                            <Button text="It"/>
                            <Button text="Design"/>
                            <Button text="Work"/>
                            <Button text="Tech"/>
                        </div>
                    </div>
                </div>
                <div className="post_categories">
                    <form>
                        <input type="text" placeholder="Type to search..." />
                    </form>
                    <div className="recent_posts">
                        <h3>Recent Posts</h3>
                        {articles.map ((articles, index) => (
                            <ArticlesOneBox key ={index} title={articles.title} description={articles.description} />
                        ))} 
                    </div>
                    <ArticlesOneCategories />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticlesOne