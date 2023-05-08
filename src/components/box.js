import React from "react";

export default function Box(props) {
    return(
    <div className={props.value!==null?"box "+props.value: "box"}  onClick={props.toogle}>
        <div className="value">{props.value}</div>
    </div>);
}