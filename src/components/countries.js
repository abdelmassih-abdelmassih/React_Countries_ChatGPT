import React from 'react'
import Country from './country'


export default function Countries({ data }) {

  const rendercountries = () => {
    return data.map((country) => {
      return (
        <Country
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.png}
          population={country.population}
          area={country.area}
          map={country.maps.googleMaps}
        />
      )
    }
    )
  };

  return (
    <div className='countries_container'>
      {rendercountries()}
    </div>
  )
}
