import React from "react";
import s from "./Button.module.css"

const Button = (props)=>{
    let disabled = props.disabled || false;
    let verticalPadding = props.verticalPadding, horizontalPadding= props.horizontalPadding;

    if (!props.verticalPadding){
        verticalPadding = 8;
        horizontalPadding = 16;
    }
    return <button className={s.button} disabled={disabled} style={{paddingTop: `${verticalPadding}px`, paddingBottom: `${verticalPadding}px`, paddingLeft: `${horizontalPadding}px`, paddingRight: `${horizontalPadding}px`}}>{props.value}</button>
}

export default Button;