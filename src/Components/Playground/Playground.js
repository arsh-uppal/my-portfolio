import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Playground() {

    const multiAnimation = useSpring({
        from: { opacity: 0, color: 'red' },
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 1, color: 'red' },
            { opacity: .5, color: '#008000' },
            { opacity: .8, color: 'black' }
        ]
    });

    return(
        <div>
            <animated.h1 style={multiAnimation}>Coming soon..</animated.h1>
            <svg width="200" height="200">
                <circle cx="90" cy="90" r="80" stroke="green" stroke-width="4" fill="yellow" />
                Sorry, your browser does not support inline SVG.
            </svg> 
        </div>
    );
}