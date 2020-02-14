import React from 'react';
import './footer.css';

export default function Footer() {

    return (
        <div className="footerContainer">
            <div className="socialContainer">
                <div className="socialImages">
                    <img src={require("../../images/instagram.png")} alt="insta"
                    />
                    <img src={require("../../images/github.png")} alt="git" className="imgFollow"
                    />
                    <img src={require("../../images/linkedin.png")} alt="linkedin" className="imgFollow"
                    />
                </div>
            </div>
        </div>
    );
}