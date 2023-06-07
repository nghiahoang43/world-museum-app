import React, { useState } from 'react'
import './Member.css'
import { members } from '../../data/members'

const Member = () => {
    const [selected, setSelected] = useState(0);
    const mLength = members.length;
  return (
    <div className="members">
        <div className="member-left">
            <span>Members</span>
            <span className='stroke-text'>Who are we?</span>
            <span>What did we do?</span>
            <span>
                {members[selected].name}
            </span>
            <span>
                {members[selected].parts}
            </span>
        </div>
        <div className="member-right">
            <div></div>
            <div></div>
            <img src={members[selected].img} alt={members[selected].name}></img>
            <div className="arrows">
                <img onClick={() => {
                    selected === 0 ?
                    setSelected(mLength - 1) :
                    setSelected(selected - 1)
                }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB1ZrbbepAEIbHRiDEk0uAB24SD6GD0EFOBQkVkFQQTgUhFUAqOJwKQgfkAYmrhEvwCzyAgPwTmSgXCLNhbMMnRbbCCs2/u7P77ywWBcBoNLrA42Gz2fDTsSyrs1qtqsVi0SVlLFJmMplcI9gGXp0vH3nL5bJSKpVeSBGbFPGDb9H34BknkUg8kDJqAsbj8b0f/F4wpS5JGRUBHPx6va4LmrqkzNECDILnEfhPyhyVxFhteKW5FTZv5/P5P6TMr0cAwTelwWOEnoIInjEegW6366RSqSZeryTtIfKxUChIR8kYIwF+8M94vZC0R8//xeZVpwARC+j3+2nbtv/RCQXPiAT4wXPPpyXtMW3uMG0aFAIHBZgGj55nz9OikPhRgGHwHv6qWG3aFCJ7BbCjxFTg4B06jAfHWcnlcqpGTcLOfQA9f2kQvBtV8Ezs6z/YUeLB0yBJh3Ex5ytI2AFFxKcRwLSpHXKUH3gLPohDignvOWBiyoCHtncUgLuUgE7rbN/fBBgGfwq4vkVpWEjYGyyVTTpDeMNE7HaNzhSsfjVOYpG3OVHSLMCl8+XF5mSgMwULz6PNmczWl84LjxOYTeP7PoDVqI6Evpd+A7tOimD6xWIxbzabueVymc3jZzM3GAxukdnS4tNp7cRbDPeFyEXstNOGVjpSETvtNFtjtsgkm+N86On2er1I9pO9dSEWwT1LMhFOPB5/Hg6HolKLJupnYnCDY+UThcTByhzPbYORYFrsbikkTOtC4pFA23o2mw18gzSqzE2nU2exWIgrc2GIMCruZjIZD7csPJ1EpRM+JAU9nX5dXseK08LjWtIWS3ILq1qVAuCo+wFD/9Sez+fVrYfR4qgbGi7eGjjZq2QyqV5mP/qKyUREEMdXlUs+AxESb2WE2jWrL+LHROUbe1JG9aKbT0i+iF2J6vHPDUgZVQGML6L8obe5ct1hdxuE5X4FLihqMNKrIDAAAAAASUVORK5CYII=" alt="left-arrow"/>
                <img onClick={() => {
                    selected === mLength - 1 ?
                    setSelected(0) :
                    setSelected(selected + 1)
                }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB1ZrbbepAEIbHRiDEk0uAB24SD6GD0EFOBQkVkFQQTgUhFUAqOJwKQgfkAYmrhEvwCzyAgPwTmSgXCLNhbMMnRbbCCs2/u7P77ywWBcBoNLrA42Gz2fDTsSyrs1qtqsVi0SVlLFJmMplcI9gGXp0vH3nL5bJSKpVeSBGbFPGDb9H34BknkUg8kDJqAsbj8b0f/F4wpS5JGRUBHPx6va4LmrqkzNECDILnEfhPyhyVxFhteKW5FTZv5/P5P6TMr0cAwTelwWOEnoIInjEegW6366RSqSZeryTtIfKxUChIR8kYIwF+8M94vZC0R8//xeZVpwARC+j3+2nbtv/RCQXPiAT4wXPPpyXtMW3uMG0aFAIHBZgGj55nz9OikPhRgGHwHv6qWG3aFCJ7BbCjxFTg4B06jAfHWcnlcqpGTcLOfQA9f2kQvBtV8Ezs6z/YUeLB0yBJh3Ex5ytI2AFFxKcRwLSpHXKUH3gLPohDignvOWBiyoCHtncUgLuUgE7rbN/fBBgGfwq4vkVpWEjYGyyVTTpDeMNE7HaNzhSsfjVOYpG3OVHSLMCl8+XF5mSgMwULz6PNmczWl84LjxOYTeP7PoDVqI6Evpd+A7tOimD6xWIxbzabueVymc3jZzM3GAxukdnS4tNp7cRbDPeFyEXstNOGVjpSETvtNFtjtsgkm+N86On2er1I9pO9dSEWwT1LMhFOPB5/Hg6HolKLJupnYnCDY+UThcTByhzPbYORYFrsbikkTOtC4pFA23o2mw18gzSqzE2nU2exWIgrc2GIMCruZjIZD7csPJ1EpRM+JAU9nX5dXseK08LjWtIWS3ILq1qVAuCo+wFD/9Sez+fVrYfR4qgbGi7eGjjZq2QyqV5mP/qKyUREEMdXlUs+AxESb2WE2jWrL+LHROUbe1JG9aKbT0i+iF2J6vHPDUgZVQGML6L8obe5ct1hdxuE5X4FLihqMNKrIDAAAAAASUVORK5CYII=" alt="right-arrow"/>
                </div>
        </div>
    </div>
  )
}

export default Member