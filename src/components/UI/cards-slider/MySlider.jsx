import React, { useState } from 'react';
import classes from "./mySlider.module.css"

function MySlider() {
    const [slides] = useState([
        { id: 1, title: "Panda", url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"},
        { id: 2, title: "Tiger", url: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        { id: 3, title: "Horse", url: "https://images.unsplash.com/photo-1534774452219-dbbf8eb7c543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        { id: 4, title: "White Bear", url: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        { id: 5, title: "Fox", url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"}
    ])
    const [activeSlide, setActiveSlide] = useState(slides.length-1)

    return ( 
        <div className={classes.container}>

            {
                slides.map( (slide)=>{
                    return(
                    <div 
                        key={slide.id} 
                        className={
                            [classes.slide, (activeSlide === slide.id ? classes.active : '')].join(' ')
                        } 
                        onClick={ ()=> setActiveSlide(slide.id)}
                        style={{height: '50vw', backgroundImage: `url("${slide.url}")`}}
                    >
                        <h3>{slide.title}</h3>
                    </div>)
                } )
            }
        </div>

    )
}

export default MySlider;