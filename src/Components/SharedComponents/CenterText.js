import React, { useState, useEffect } from 'react';

let words = ["I am Arsh", "Developer.", "Full Stack"];

export default function CenterText() {

    let countWord = 1;
    const [firstWord, setFirstWord] = useState("I am Arsh");

    useEffect(
        () => {
            let timer1 = setTimeout(() => {
                setFirstWord("Developer");
            }, 4000);

            return () => {
                clearTimeout(timer1)
            }
        },
        []
    )

    useEffect(
        () => {
            let timer2 = setTimeout(() => {
                setFirstWord("Full Stack");
            }, 5000);
            return () => {
                clearTimeout(timer2)
            }
        },
        []
    )
    
    useEffect(
        () => {
            let timer2 = setTimeout(() => {
                setFirstWord("I am Arsh.");
            }, 6000);
            return () => {
                clearTimeout(timer2)
            }
        },
        []
    )

    return (
        <div>
            <div className="centerPiece">
                <div className="typewriter">
                    <p>{firstWord}</p>
                </div>
            </div>
        </div>
    );
}