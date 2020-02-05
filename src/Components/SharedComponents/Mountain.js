import React from 'react';



export default function Mountain(props) {
    
    let mountainStyle = {
        "width": 500,
        "height": "40vh",
        "backgroundColor": props.bgColor,
        "borderTopLeftRadius": 250,
        "borderTopRightRadius": 250,
        "borderBottom": 0,
    }

    return(
        <div>
            {props.color}
            <div style={mountainStyle} className={props.className}></div>
        </div>
    );
}