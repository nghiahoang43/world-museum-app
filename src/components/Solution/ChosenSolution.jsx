import React from 'react'

const ChosenSolution = ({chosenSolution}) => {
  return (
    <div className="sol-chosen">
        <span>{chosenSolution.name}</span>
        <span>{`by ${chosenSolution.author}`}</span>
        <span>{chosenSolution.solution}</span>
        <div><span>Explain</span></div>
    </div>
  )
}

export default ChosenSolution