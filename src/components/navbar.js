import React, { useState } from 'react'

export default function Navbar({ search, AIsearch, setAISearch }) {
  const [countryName, setCountryName] = useState('')
  const [autoSearch, setAutoSearch] = useState(false)

  function handleChange(event) {
    setCountryName(event.target.value)
    if (autoSearch) search(event.target.value)
  }

  function handleSearch() {
    search(countryName)
  }

  return (
    <div className='Navbar_container'>
      <button onClick={() => { setAISearch(!AIsearch) }}>{!AIsearch ? 'Ask AI' : 'Hide AI'}</button>
      <button onClick={() => { setAutoSearch(!autoSearch) }}>{autoSearch ? 'Auto Search' : 'Manual Search'}</button>
      <input type='text' placeholder='Enter country name' onChange={handleChange} />
      <button className='Search_button' onClick={handleSearch}>Search</button>
    </div>
  )
}
