import React from 'react'
import "../css/article.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';



const Article = ({article}) => {

   
    return (

        <div className = 'card'>
            <img style = {{height : 'auto', width : '100%', maxHeight : "185px", objectFit : 'cover'}} src = {article.urlToImage ? article.urlToImage : require("../photos/news.jpg") }  alt = "" />
            <div className = 'card-content'>
                <div className="card-top-container">
                    <h4 className = "card-content-network">{article.source.name}</h4>
                    <p className = 'date'>{new Date(article.publishedAt).toLocaleString()}</p>
                </div>
                <h3 className = 'card-content-title'>
                    {article.title} 
                </h3>
                <p className = 'card-content-text'> 
                    {article.content}
                </p>
                <a href = {article.url} target="_blank" rel="noopener noreferrer" className = ' card-btn btn' samesite= "Lax" >Go To Story
                    <ArrowForwardOutlinedIcon className = 'arrowIcon'/>
                </a>
            </div>
            <p>{article.name}</p>

        </div>
    
       
    )
   
}

export default Article
