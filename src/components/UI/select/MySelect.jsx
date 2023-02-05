import React, { useState } from 'react';
import classes from './mySelect.module.css'

function MySelect() {
    const [options] = useState([
        'Armenia', 'Russia', 'USA', 'Spain', 'France', 'Germany', 'Poland', 'Belgium', 'Argentina'
    ])
    const [active, setActive] = useState(false)
    const [select, setSelect] = useState('Country')
    const [activeLi, setActiveLi] = useState('')

    const selectClick = (flag) => {
        setActive(flag)
    }

    const selextValue = (option) => {
        setSelect(option)
        selectClick(!active)
        setActiveLi(option)
    }

    return ( 
        <div className={classes.wrapper}>
            <div className={classes.select} onClick={()=>selectClick(!active)}>
                <p className={classes.selCntry}>{select}</p>

                <p className={[classes.arrow, (active? classes.arrowActive: '')].join(' ')}>&#9660;</p>
            </div>

            <ul className={[classes.countries, (active && classes.cntrActive)].join(' ')}>
                {
                    options.map( (option, i)=>{
                        return  <li 
                                    onClick={ ()=>{selextValue(option)} } 
                                    key={i}
                                    className={`${activeLi === option? classes.liActive: ''}`}
                                >
                                    {option}
                                </li>
                    } )
                }
            </ul>

        </div>
    )
}

export default MySelect;