import React from 'react';

export default function Mountain(props) {
    
    let mountainStyle = {
        "width": "400px",
        "height": "200px",
        "backgroundColor": props.bgColor,
        "borderTopLeftRadius": "200px",
        "borderTopRightRadius": "200px",
        "borderBottom": 0,
    }

    return(
        <div style={{"zIndex":props.zindex,}}>
            {props.color}
            <div style={mountainStyle} className={props.className}></div>
        </div>
    );
}