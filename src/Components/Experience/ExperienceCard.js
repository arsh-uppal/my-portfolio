import React from 'react';

export default function ExperienceCard(props) {

    return (
        <div className={props.cardPosition}>
            <div className="content">
                <h3>{props.title}</h3>
                {props.icon}
                <h4>{props.year}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    );
}