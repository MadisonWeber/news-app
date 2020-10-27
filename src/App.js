import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ArticleContext } from "./context/articleContext"
import Article from './components/Article'
import "./css/app.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import Error from './components/Error'

function App() {

  const { articles, setArticles, currentCategory,  error, setSources, currentQuery, loading, setLoading, currentSource, currentCountry, setCountryCodes, setError } = useContext(ArticleContext)
  const API_KEY = process.env.REACT_APP_NEWS_API



  const getSources = async () => {
    const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
    const sources = await axios.get(url)
    setSources(sources.data.sources.map(source => {
      return {name : source.name, langauge : source.language}
    }))
    setCountryCodes(sources.data.sources.map(source => {
      return source.country
    }))
  }

  const getTopHeadlinesData = async () =>{
    setLoading(true)
    try{
      const countryInput = currentCountry ? currentCountry : 'ca';
      const queryInput = currentQuery ? '&q=' + currentQuery : '';
      const url = `http://newsapi.org/v2/top-headlines?country=${countryInput}${queryInput}&apiKey=${API_KEY}`
      const headlines = await axios.get(url)
      setArticles(headlines.data.articles)
      setLoading(false)
      setError(false)

    }catch (err) {
     
      setError(true)
      setLoading(false)
    }
    
      
    
  }

  const getEverythingData = async () => {
    setLoading(true)
    try{
        const queryInput = currentQuery ? currentQuery : 'news';
        const sourceInput = currentSource ? "&sources=" + currentSource.split(" ").join("-") : '';
        const url = `https://newsapi.org/v2/everything?q=${queryInput}${sourceInput}&apiKey=${API_KEY}`
        const everything = await axios.get(url)
        setArticles(everything.data.articles)
        setLoading(false)
        setError(false)
    }catch (err) {
     
      setError(true)
      setLoading(false)
    }
 
  }

  

  useEffect(()=>{
    if(currentCategory === "top-headlines"){
      getTopHeadlinesData()
    }else{
      getEverythingData()
    }
  }, [currentCategory, currentQuery, currentCountry, currentSource])

  useEffect(()=>{
    getSources()
  },[])




  
  return (

    <div className = 'App'>
        <Header />
        <div className="app-container">
        <div className = 'sidebar' > <Sidebar/></div>
          {error  ? <Error /> : (
          loading || articles.length === 0 ? <Loader /> : (
          <div className = "card-container">
              {articles.map( (article, id) =>
              <Article key = {id} article = {article}/>
              )}
          </div>
          ))}
        </div>
    </div>
  );
}

export default App;
