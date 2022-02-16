import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react'
import About from "../component/About Us jsx/About jsx.jsx";
import Contact from "../component/Contact jsx/Contact.jsx";
import LearningCenter from "../component/Learning Center jsx/Learning Center.jsx";
import Pricing from "../component/Pricing/Pricing.jsx";


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/LearningCenter" element={<LearningCenter />} />
                <Route exact path="/Pricing" element={<Pricing />} />
                <Route exact path="*" element={<About />} />
            </Routes>
        </Router>
    )
}

export default Routing