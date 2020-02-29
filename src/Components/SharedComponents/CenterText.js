import React, { useState, useEffect } from 'react';

let words = ["I am Arsh", "Developer", "Designer", "Full Stack"];

export default function CenterText() {

    let countWord = 1;
    const [firstWord, setFirstWord] = useState(words[0]);

    useEffect(
        () => {
            let interval = setInterval(
                function () {
                    setFirstWord(words[countWord]);
                    if (countWord < 3) {
                        countWord++;
                    } else {
                        countWord = 0;
                    }
                }, 4000
            );

            return () => {
                clearInterval(interval);
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