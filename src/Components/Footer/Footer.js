import React from 'react';
import './footer.css';

export default function Footer() {

    return (
        <div className="footerContainer">
            <div className="socialContainer">
                <div className="socialImages">
                    <a href="https://www.instagram.com/im.__arsh/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/instagram.png")} alt="insta"
                        />
                    </a>
                    <a href="https://github.com/Singh-Arshdeep" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/github.png")} alt="git" className="imgFollow"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/arshdeep-singh-uppal/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/linkedin.png")} alt="linkedin" className="imgFollow"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}