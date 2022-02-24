import react from 'react'
import data from './data.json'


const Writings = () => {
    return(
        <div className='center-text'>
        
        <h1>Writings</h1>
        <h2>{data.Question1}</h2>
        <p>{data.entry1p1}</p>
        <p>{data.entry1p2}</p>
        <p>{data.entry1p3}</p>
        <p>{data.entry1p4}</p>
        </div>
    )

}

export default Writings;