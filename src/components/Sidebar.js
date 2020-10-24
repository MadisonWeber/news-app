import React, { useContext, useRef } from 'react'
import "../css/sidebar.css"
import { ArticleContext } from "../context/articleContext"
import CountryInput from './CountryInput'
import SourceInput from './SourceInput'
import Hamburger from './Hamburger'
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Sidebar = () => {

    const {setCurrentCategory, setCurrentQuery, setCurrentCountry, setCurrentSource, currentCategory, countryCodes } = useContext(ArticleContext)


    const selectedValue = useRef("");
    const queryValue = useRef("");
    const countryValue = useRef("");
    const sourceValue = useRef("");



    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentCategory === 'top-headlines') {
            if(countryValue.current.value.length > 1){
                setCurrentCountry(countryValue.current.value)
                
            }
            if(queryValue.current.value.length > 1){
                setCurrentQuery(queryValue.current.value)
            }
        } else {
            if(queryValue.current.value.length > 1){
                setCurrentQuery(queryValue.current.value)
            }
            if(sourceValue.current.value.length > 1){
                setCurrentSource(sourceValue.current.value)
            }
        }
    }

    const handleCategoryChange = (e) =>{
        setCurrentCategory(selectedValue.current.value)
        resetForm()
    }

    const resetForm = () => {
        setCurrentSource('')
        setCurrentCountry('')
        setCurrentQuery('')
        
    }

    const notWorkingCountries = ["pk", "es", 'is', "zh"]
    const uniqueCountryCodes = Array.from(new Set(countryCodes))
    const filteredCountryCodes = uniqueCountryCodes.filter( country =>  !notWorkingCountries.includes(country))



    return (
        <>
           <form>
                <div className = 'select-category-container'>
                    <h5>Search All or Top Headlines</h5>
                    <select name="currentCategory"
                    ref = {selectedValue}
                    
                    onChange = {handleCategoryChange}
                    >
                        <option value="top-headlines">Top Headlines</option>
                        <option value="everything">Everything</option>
                    </select>
                </div>
                {currentCategory === 'top-headlines' ? (
                        <CountryInput filteredCountryCodes = {filteredCountryCodes} countryValue = {countryValue}/>
                        ) :(
                        <SourceInput sourceValue = {sourceValue}/>
                        )
                }
                <div className="query-container">
                    <h5>Filter By Keyword</h5>
                    <input className = 'input query-input' type="text" ref = {queryValue}></input>
                </div>
                <div className="form-buttons-container">
                    <button className = 'submit-form' type = 'submit' onClick = {handleSubmit}><SearchIcon fontSize = 'large'/> Search </button>
                    <button className = 'clear-form' type = 'reset' onClick = {resetForm}> <HighlightOffIcon fontSize = 'large'/> Clear</button>
                </div>
           </form>
           <Hamburger />
        </>
    )
}

export default Sidebar
