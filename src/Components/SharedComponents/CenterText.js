import React, { useState, useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";


// let words = ["I am Arsh", "Developer", "Designer", "Full Stack"];

const MagicOcean = [
    "Developer",
    "Designer",
    "Full Stack",
    "I am Arsh"
];
let index = 0;

export default function CenterText() {

    // let countWord = 1;
    // const [firstWord, setFirstWord] = useState(words[0]);

    // useEffect(
    //     () => {
    //         let interval = setInterval(
    //             function () {
    //                 setFirstWord(words[countWord]);
    //                 if (countWord < 3) {
    //                     countWord++;
    //                 } else {
    //                     countWord = 0;
    //                 }
    //             }, 4000
    //         );

    //         return () => {
    //             clearInterval(interval);
    //         }
    //     },
    //     []
    // )

    const [magicName, setMagicName] = useState("I am Arsh");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = index > 2 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 4000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );

    return (
        <div>
            <div className="centerPiece">
                <p className="cursor">{name}</p>
            </div>
        </div>
    );
}