import React from "react";
import s from './Preloader.module.css'
import preloader from '../../../Icons/download-anim.svg'

const Preloader = (props) => {
    return (
            <img src={preloader} className={s.preloader} style={{height: props.height} }/>
    )
}
export default Preloader;