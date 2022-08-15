import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.35 },
            { id: 2, value: "Css", xp: 0.5 },
            { id: 3, value: "MongoDB", xp: 0.35 },
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.35 },
            { id: 2, value: "Sass", xp: 0.5 },
        ],
    };

    render() {
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & Bibliothèques"
                />
            </div>
        );
    }
}
