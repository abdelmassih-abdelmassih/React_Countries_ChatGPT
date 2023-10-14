import React from 'react'

export default function Country(data) {

    return (
        <div className='Country_container'>
            <div className="card">
                <img src={data.flag} alt="Country Flag" />
                <h2>{data.name}</h2>
                <p>Area: {data.area} km&#178;</p>
                <p>Population: {data.population}</p>
                <p><a href={data.map}>See in Google Map</a></p>
            </div>
        </div>
    )
}



