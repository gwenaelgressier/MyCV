import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1 className="contact-title">Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Saint-Affrique</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0642102309">
                                <span
                                    className="clickInput"
                                    onClick={() => {
                                        alert("Téléphone copié !");
                                    }}
                                >
                                    06 42 10 23 09
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="gressier.gwenael@gmail.com">
                                <span
                                    className="clickInput"
                                    onClick={() => {
                                        alert("Email copié !");
                                    }}
                                >
                                    gressier.gwenael@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a
                            href="https://fr.linkedin.com/in/gwena%C3%ABl-gressier-375692232"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/gwenaelgressier"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/_GwenDev_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
