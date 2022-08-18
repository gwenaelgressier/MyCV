import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import Portefolio from "./pages/Portefolio";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/competences" element={<Knowledges />} />
                <Route path="/portefolio" element={<Portefolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/competences" element={<Knowledges />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
