import React from "react";

const hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Loisirs</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-mountain-sun"></i>
                    <span>Escalade</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-campground"></i>
                    <span>Bivouac</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-film"></i>
                    <span>Cinéma</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-gamepad"></i>
                    <span>Jeux vidéos</span>
                </li>
            </ul>
        </div>
    );
};

export default hobbies;
