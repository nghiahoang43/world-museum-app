import React, { useState } from 'react'
import './Solution.css'
import ChosenSolution from './ChosenSolution'
import { solutions } from '../../data/solutions'

const Solution = () => {
    const [chosenSolution, setChosenSolution] = useState(solutions[0])
    return (
        <div className="sol-ctn">
            <h1>Our <span className='stroke-text'>Solutions</span></h1>
            <div className="sols">
                <ChosenSolution chosenSolution={chosenSolution}/>
                <div className="sol-list">
                    {solutions.map((solution, index) => {
                        return (
                            <div className="sol" key={index}>
                                <span>{`Topic ${index+1}`}</span>
                                <span>{solution.name}</span>
                                <div onClick={()=>setChosenSolution(solutions[index])}>Read More</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Solution