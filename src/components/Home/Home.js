import react from 'react'
import './Home.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import FarmersMarket from './FarmersMarket.JPG'


const Home = () => {
    return(
        <div className='Home'>             
            <div className='imageDiv'>
                <div className='imageText1'>
                    {/* Entre Broma y Broma la Verdad se Asoma */}
                    Hi. I'm Erick. <br/>A programmer from Kansas
                </div>
                <img alt='Erick with his dog at the beach ' src={img1} className="imageCenteringHeight imagePositioning1"/>
            </div>
            
            
            <div className="divCenteringHeight ">
                <p className='spaceText1'>
                    I like to build websites. 
                </p>

                <p className='spaceText2'>
                    Here are some of my projects.
                </p>
            </div>
            
            <div className='imageDiv'>
                {/* <div className='imageText2'>
                    more words
                </div> */}
                <img alt='farmers market KSU' src={FarmersMarket} className="imageCenteringHeight imagePositioning2"/>
            </div>

            <div className="divCenteringHeight ">
                <p className='spaceText2'>
                    this is where i'll put a quote or something
                </p>
            </div>

            
            <div className='imageDiv'>
                
                <img alt='second' src={img3} className="imageCenteringWidth imagePositioning3 "/>
            </div>
            
                

                
            </div>
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