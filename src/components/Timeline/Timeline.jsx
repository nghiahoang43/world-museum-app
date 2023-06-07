import React, { useEffect, useRef } from "react";
import "./Timeline.css";
import { timeline } from "../../data/timeline";

const Timeline = () => {
    
    const itemsRef = useRef([]);

    // isElementInViewport function from your JS
    const isElementInViewport = (el) => {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const callbackFunc = () => {
        for (let i = 0; i < itemsRef.current.length; i++) {
            if (isElementInViewport(itemsRef.current[i])) {
                itemsRef.current[i].classList.add("in-view");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

        // clean up event listeners on component unmount
        return () => {
            window.removeEventListener("load", callbackFunc);
            window.removeEventListener("resize", callbackFunc);
            window.removeEventListener("scroll", callbackFunc);
        };
    }, []); // empty dependency array so this effect runs once on mount and clean up on unmount

    return (
        <div className="timeline-ctn">
            <div className="timeline-name">
                
            <h1>Timeline</h1>
            <span className='stroke-text'>Our Journey</span>
            </div>
            <div className="timeline">
                <ul>
                    {
                        timeline.map((item, index) => (
                            <li ref={el => itemsRef.current[index] = el} key={index}>
                                <div className="stage">
                                    <div className="stage-name">

                                    <span>{`STAGE ${index + 1}`}</span>
                                    <span>{`(${item.range})`}</span>
                                    </div>
                                    <div>
                                        {item.tasks.map((task, index) => (
                                            <div className="task" key={`task-${index}`}>
                                                <span>{">"}</span><span> {task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
