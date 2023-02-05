import React, { useState } from 'react';
import classes from './myModal.module.css'

function MyModal() {
    const [modal, setModal] = useState(false)

    const modalActive = () => {
        setModal(!modal)
    }

    return ( 
    <div>
        <div onClick={modalActive} className={classes.button}>
            <button >Оставить заявку</button>
        </div>

        {
            modal && 
            <div onClick={modalActive} className={[classes.pop_up, (modal ? classes.active : '')].join(' ')}>
                <div className={classes.pop_up_container}>
                    <div onClick={ (e)=>{e.stopPropagation()} } className={classes.pop_up_body}>
                        <p>Оставить заказ</p>
                        <form>
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Телефон"/>
                            <button>Оставить заказ</button>
                        </form>

                        <div onClick={modalActive} className={classes.pop_up_close}>✖</div>
                    </div>
                </div>
            </div> 
        }
        
    </div>
    );
}

export default MyModal;