import React, { useContext } from 'react';
import { ArticleContext } from '../context/articleContext'

const SourceInput = ( {sourceValue} ) => {

    const { sources } = useContext(ArticleContext)

    return (
        <div className="source-container">
            <h5>Filter By Source</h5>
            <select name="source" id="source" ref = {sourceValue}>
                <option defaultValue value = '' ></option>
                {sources.map( (source, id) => (
                    
                    <option value = {source.name} key = {id}>
                        {source.name}
                    </option>
                ))}
                
            </select>
        </div>
    )
}

export default SourceInput
