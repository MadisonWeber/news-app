import React, {useContext} from 'react'
import "../css/error.css"
import { ArticleContext } from "../context/articleContext"

const Error = () => {

    const { errorMessage } = useContext(ArticleContext)

    return (
        <div className = 'error-div-container'>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default Error
