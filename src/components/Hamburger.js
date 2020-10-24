import React, { useRef } from 'react'
import "../css/hamburger.css"



const Hamburger = () => {

    const hamburgerRef = useRef(null)
    const toggleClosedClass = () => {

       const sidebar = document.querySelector('.sidebar');
       const cardContainer = document.querySelector('.card-container');
       hamburgerRef.current.classList.toggle('closed')
       sidebar.classList.toggle('closed')
       cardContainer.classList.toggle('closed')
    }

    return (
    
        <div ref = {hamburgerRef}  className = 'hamburger' onClick = {toggleClosedClass}></div>
     
        
    )
}

export default Hamburger
