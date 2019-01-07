import React from 'react';
import Article from '../components/article';

const Articles =(props) => {

  const renderArticles = () => {
    return (props.articles.map((article, index) => <article key={index} description={articledescription} title={article.title} url={article.url} />))
  }

  return(
    <div id="articles">
    {renderArticles()}
    </div>
  )
}

export default Articles