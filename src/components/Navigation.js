import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={require("../media/gwen.jpg")} alt="profil-pic" />
                    <h3>Gwenaël GRESSIER</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portefolio">
                            <i className="fas fa-images"></i>
                            <span>Portefolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/gwen-gressier-b8a8a1177/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/gwenaelgressier"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/_GwenDev_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
