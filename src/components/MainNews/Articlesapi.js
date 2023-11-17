import React from 'react'
import { useArticles } from '../../useContext/ArticleContext'

const Articlesapi = () => {
    const { Articles } = useArticles()

  return (
    <section className='articlesapi_section'>
        <div className='container'>
            <h1>Articles</h1>
            <div className='articles_api'>
                {
                Articles.map(article => (
                    <div key={article.id}>{article.title}</div>
                ))
                }
            </div>
        </div>

    </section>
  )
}

export default Articlesapi