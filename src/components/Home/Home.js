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
                    <strong>Entre broma y broma la verdad se asoma.</strong>

                </div>
                <img alt='first' src={img1} className="imageCenteringHeight imagePositioning1"/>
            </div>
            
            
            <div className="divCenteringHeight ">
                <p className='spaceText1'>
                    this is where i'll put a quote or something
                </p>
            </div>
            
            

            <div className='imageDiv'>
                <div className='imageText2'>
                    more words
                </div>
                <img alt='second' src={img2} className="imageCenteringHeight imagePositioning2"/>
            </div>

            <div className="divCenteringHeight ">
                <p className='spaceText2'>
                    this is where i'll put a quote or something
                </p>
            </div>

            
            <div className='imageDiv'>
                
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