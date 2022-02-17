import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react'
import Home from "../component/Home/Home.jsx";
import About from "../component/About Us jsx/About jsx.jsx";
import Contact from "../component/Contact jsx/Contact.jsx";
import LearningCenter from "../component/Learning Center jsx/Learning Center.jsx";
import Pricing from "../component/Pricing/Pricing.jsx";
import Producttour from "../component/Producttour/producttour.jsx";


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/product-tour" element={<Producttour />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/LearningCenter" element={<LearningCenter />} />
                <Route exact path="/Pricing" element={<Pricing />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routing