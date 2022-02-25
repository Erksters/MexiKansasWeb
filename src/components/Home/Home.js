import react from 'react'
import './Home.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
const Home = () => {
    return(
        <>           
            <div className='imageDiv'>
                <div className='imageText1'>
                    words
                </div>
                <img alt='first' src={img1} className="imageCenteringHeight imagePositioning1"/>
            </div>
            
            <div className='imageDiv'>
                <div className='imageText2'>
                    more words
                </div>
                <img alt='second' src={img2} className="imageCenteringHeight imagePositioning2"/>
            </div>
            
            <div className='imageDiv'>
                <div className='imageText'>
                    more words
                </div>
                <img alt='second' src={img3} className="imageCenteringWidth imagePositioning3 "/>
            </div>
            
                

                
            </>
            /* <>
                <div>
                    <img alt='second image' src={img1} className="coverImg1" />
                    
                </div>
                
            </>
            <>
                <div>
                    <img alt='first image' src={img1} className="coverImg1" />
                    
                </div>
                
            </> */
        

        
    )

}

export default Home;