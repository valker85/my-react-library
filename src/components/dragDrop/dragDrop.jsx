import React, { useState } from 'react'
import classes from './dragDrop.module.css'

function DragDrop() {

    const [placeholders, setPlaceholders] = useState([
        {
            whose: 'start', 
            items: [
                {name:'HTML', id: 1}, 
                {name:'CSS', id: 2}
            ], 
            id: 1
        },
        {whose: 'in process', items: [], id: 2},
        {whose: 'done', items: [], id: 3}
    ])

    let [actualItem, setActualItem] = useState(0)

    const [hold, setHold] = useState(false)

    // const items = document.querySelectorAll('.item')
    // const placeholders = document.querySelectorAll('.placeholder')
    // let actualItem;
    

    
    // item
    function dragstart(event, id) {

        // setTimeout(() => {
        //     event.target.classList.add('hide')
            setActualItem(id)
        // }, 0);


        // setHold(!hold)
        console.log(event.target)
    }
    function dragend(event) {
        setActualItem(0)
    }
    
    // placeholders
    function dragover(event) {
        event.preventDefault()
    }


    function dragenter(event) {
        // if(event.target.className === 'placeholder'){
        //     event.target.classList.add('hovered')
        // } else if(event.target.className === 'item'){
        //     event.target.parentNode.classList.add('hovered')
        // }
        // console.log('dragenter')
    }
    function dragleave(event) {
    //     for (const placeholder of placeholders) {
    //         placeholder.classList.remove('hovered')
    //     }
        // console.log('dragleave')
    }
    function dragdrop(event) {
    //     event.target.classList.remove('hovered')
        
    //     if(event.target.className === 'placeholder'){
    //         event.target.append(actualItem)
    //         event.target.classList.remove('hovered')
    
    //     } else if(event.target.className === 'item'){
    //         event.target.parentNode.append(actualItem)
    //         event.target.parentNode.classList.remove('hovered')
    //     }

    // console.log('dragdrop', event.target)

    }




    return ( 
    <div style={{ display: 'flex', justifyContent: 'center', height: '400px' }}>
        <div>
            <div className={classes.row}>
                <div className={[classes['col-header'], classes.start].join(' ')}>Start</div>
                <div className={[classes['col-header'], classes.progress].join(' ')}>In process</div>
                <div className={[classes['col-header'], classes.done].join(' ')}>Done</div>
            </div>

            <div className={classes.row}>

                {
                    placeholders.map( (placeholder)=>{
                        return(
                            <div 
                                className={classes.placeholder}
                                onDragOver={ (e)=> dragover(e) }
                                onDragEnter={ (e)=>dragenter(e) }
                                onDragLeave={ (e)=>dragleave(e) }
                                onDrop={ (e)=> dragdrop(e) }

                                key={placeholder.id}
                            >
                                {
                                  placeholder.items.map( (item)=>{
                                    return(
                                        <div 
                                            onDragEnd={ (e)=> dragend(e) } 
                                            onDragStart={ (e)=> dragstart(e, item.id)} 

                                            className={[classes.item, (actualItem===item.id?classes.hold:'')].join(' ')} 
                                            draggable={true}
                                            key={item.id}
                                        >
                                            {item.name}
                                        </div>
                                    )
                                  } )
                                }

                            </div>
                        )
                    } )
                }





                    {/* <div className={classes.item} draggable='true'>CSS</div>
                    <div className={classes.item} draggable="true">JavaScript</div>
                    <div className={classes.item} draggable="true">ReactJS</div> */}

            </div>
        </div>
    </div>
    )

}

export default DragDrop;