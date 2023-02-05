import React, { useEffect, useRef, useState } from 'react'
import classes from './textOnScroll.module.css'



function TextOnScroll({children, position, style}) {
    const options = {
        threshold: [1]
    }
    const element = useRef()
    const [view, setView] = useState(false)
    const observer = new IntersectionObserver(onEntry, options)
    
    function onEntry(entry) {
        entry.forEach(change => {
            if(change.isIntersecting){
                setView(true)
            } else{
                setView(false)
            }
        })
    }

    useEffect(() => {
        observer.observe(element.current)
    })

    return (
        <div className={classes.wrap}>
            <div
                className={[
                    classes['element-animation'], 
                    classes[`anim-${position}`], 
                    (view ? classes['element-show'] : '')].join(' ')}
                ref={element}
                style={style}
            >
                {children.props.children}
            </div>
        </div>

    );
}

export default TextOnScroll;