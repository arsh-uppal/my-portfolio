import React from 'react';



export default function Mountain(props) {
    
    let mountainStyle = {
        "width": "33vw",
        "height": "35vh",
        "backgroundColor": props.bgColor,
        "borderTopLeftRadius": 260,
        "borderTopRightRadius": 260,
        "borderBottom": 0,
    }

    return(
        <div style={{"zIndex":props.zindex,}}>
            {props.color}
            <div style={mountainStyle} className={props.className}></div>
        </div>
    );
}