import React from 'react'
import './Museum.css'
import DinosaurHead from '../../assets/dinosaur-head.png'

const Museum = () => {
    return (
        <div className="museum">
            <div className="l-museum">
                <div className="the-best-museum">
                    {/* <div></div> */}
                    <span>Welcome to the best museum</span>
                </div>
                <div className="museum-text">
                    <div>
                        <span className='stroke-text'>Digitalize</span>
                    </div>
                    <div>
                        <span>
                            Our Museum</span>
                    </div>
                    <div>
                        We're bringing the World Museum Objects to an accessible digital platform for all to experience
                    </div>

                </div>
                    <div className="stats">
                        <div>
                            <span>$49.7 M</span>
                            <span>Total cost</span>
                        </div>
                        <div>
                            <span>4.2</span>
                            <span>Years</span>
                        </div>
                        <div>
                            <span>5</span>
                            <span> Topics</span>
                        </div>
                    </div>
            </div>
            <div className="r-museum">
                <div className='dinosaur-head-circle'></div>
                <img src={DinosaurHead} alt="Dinosaur Head" className='dinosaur-head'/>
            </div>
        </div>
    )
}

export default Museum