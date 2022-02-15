import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react'
import Home from "../../Components/Home/Home";
import Product from "../../Components/Product Tour/Product";


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/product-tour" element={<Product />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routing