import React from 'react'
import "../css/header.css"


const Header = () => {
    return (
        <div className = 'header-container'>
            <img className = 'header-photo' src={require('../photos/news.jpg')} alt="broken"/>
            <div className ='header-text-container'>
                 <h3>The Biggest News Stories Every Day</h3>
                 <h6>Live and Up To Date</h6>
            </div>
        </div>
    )
}

export default Header
