import React from 'react';


const CountryInput = ({filteredCountryCodes, countryValue}) => {

    const countryFull = (code) => {
        const countryDict = {
            'ca' : "Canada",
            'us' : "United States",
            'au': 'Australia',
            'no': 'Norway',
            'it': 'Italy',
            'sa' : 'Saudi Arabia',
            'gb': 'United Kingdom',
            'de': 'Germany',
            'br': 'Brazil',
            'ar': 'Argentina',
            'fr': 'France',
            'in': 'India',
            'ru': 'Russia',
            'se': 'Sweden',
            'za': 'South Africa',
            'ie': 'Ireland',
            'nl': 'Netherlands',
        }
        return countryDict[code]
    }


    return (
        <div className="country-container">
            <h5>Filter By Country</h5>
            <select name="country" id="country" ref = {countryValue}>
                <option defaultValue value = '' >--</option>
                {filteredCountryCodes.map( (code, id) => (
                    <option value = {code} key = {id}>
                        {countryFull(code)}
                    </option>
                ))}
            </select>
         </div>
    )
}

export default CountryInput
