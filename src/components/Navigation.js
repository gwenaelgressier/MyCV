import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/gwen.jpg" alt="profil-pic" />
                    <h3>Gwenaël GRESSIER</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portefolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portefolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="navActive">
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
                            href="https://www.linkedin.com/in/gwen-gressier-b8a8a1177/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/gwen-gressier-b8a8a1177/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p> Gwen-2022 </p>
            </div>
        </div>
    );
};

export default Navigation;
