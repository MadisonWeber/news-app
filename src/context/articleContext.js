import React, { createContext, useState } from 'react'

export const ArticleContext = createContext()

const ArticleProvider = ({children}) => {

    const [ articles, setArticles ] = useState([]);
    const [ sources, setSources ] = useState([]);
    const [ countryCodes, setCountryCodes ] = useState([]);
    const [ currentCategory, setCurrentCategory ] = useState("top-headlines");
    const [ currentQuery, setCurrentQuery ] = useState('');
    const [ currentCountry, setCurrentCountry ] = useState('');
    const [ loading , setLoading ] = useState(true);
    const [ currentSource, setCurrentSource] = useState('');
    const [ error, setError] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('Error.. Please Try A Different Query');

    return(
        <ArticleContext.Provider value = {{articles, setArticles, sources, setSources, currentCategory, setCurrentCategory,
         currentQuery, setCurrentQuery, loading, setLoading, currentCountry, setCurrentCountry, currentSource, setCurrentSource,
         countryCodes, setCountryCodes, errorMessage, setError, error, setErrorMessage}}>
            {children}
        </ArticleContext.Provider>
    )
}
  


export default ArticleProvider;
