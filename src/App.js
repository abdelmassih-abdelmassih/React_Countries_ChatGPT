import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Countries from './components/countries'
import axios from 'axios'
import ChatGPT from './components/ChatGPT'

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState('')
  const [AIsearch, setAISearch] = useState(false)
  const [query, setQuery] = useState(false)

  function fetchname(name) {
    setLoading(true)
    setAISearch(false)
    if (name === '' || name === 'all' || name === 'All') {
      fetchAll()
      return;
    }
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }

  function fetchAll() {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchAll();
  }, [])

  return (
    <div className='App'>
      <div className='top_container'>
        <Navbar search={fetchname} setAISearch={setAISearch} AIsearch={AIsearch} />
        {AIsearch && <ChatGPT setResponse={setResponse} setQuery={setQuery}/>}
      </div>
      {AIsearch ?
        <div className='response_container'>
            {!query?
              response
              :
              <h3>Generating Text  . . .</h3>
            }
        </div>
        :
        <>
          {!loading ? <Countries data={data} /> : <h3>Loading data . . . . .</h3>}
        </>
      }

    </div>
  )
}
