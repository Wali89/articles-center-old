import React from 'react';


const Article = (props) => {
  return(
    <div>
    <h1> <a href={props.url}> {props.title}</a>  </h1>
    </div>
  )
}


export default Article;