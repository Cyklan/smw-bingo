import React from "react"
import "./Card/Card.css"
import cross from "./Card/x.png"
import check from "./Card/check.png"

export default function Card(props) {

    return (
        <div 
        className={`card ${props.checked ? "checked" : ""}`} 
        onClick={() => {
            if (props.title !== "FREE SPACE") {
                props.clickHandler(props.x, props.y, !props.checked)
            }
        }}
        >
            {props.title}
            <img src={props.checked ? check : cross} className="checkmark" />
        </div>
    )
}