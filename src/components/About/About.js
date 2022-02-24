import react from 'react'
import data from './data.json'

const About = () => {
    return(
        <div className='center-text'>
            <h2>About Myself</h2>
            <p>{data.background}</p>
            <p>{data.questions}</p>
            <p>{data.future}</p>
            <p>{data.conclusion}</p>
            <p>{data.signoff}</p>
            <p>{data.name}</p>
        </div>
    )
}

export default About;