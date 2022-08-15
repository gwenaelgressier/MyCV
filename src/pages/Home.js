import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Gwenaël GRESSIER</h1>
                    <h2>Développeur Web</h2>
                    <div className="pdf">
                        <a href="./media/cv.pdf" target="_blank">
                            Télécharger CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
