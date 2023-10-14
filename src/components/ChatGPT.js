import React, { useState } from 'react'
import axios from 'axios'

export default function ChatGPT({ setResponse, setQuery }) {
    const [body, setBody] = useState('')
    const HTTP = 'https://countrie-api.onrender.com/chat'

    function handleChange(event) {
        setBody(event.target.value)
        // console.log(body)
    }

    async function handleSubmit() {
        setQuery(true)
        await axios
            .post(`${HTTP}`, { prompt: body })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => console.error(err))
        setQuery(false)
        // console.log(body)
    }

    return (
        <div className='ChatGPT_container'>
            <input placeholder='Ask the AI for more Information' onChange={handleChange} />
            <button onClick={handleSubmit}>Query</button>
        </div>
    )
}
