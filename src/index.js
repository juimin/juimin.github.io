import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./homepage";
import Portfolio from "./portfolio";

const App = () => {
    return <div>
        <h1>Derek Wang</h1>
        <div>Placeholder for fun graphics</div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="portfolio" element={<Portfolio />} />
        </Routes>
    </div>
}


// Function returning the browser router wrapped application component
const RouterWrappedApp = () => {
    return <BrowserRouter>
        <App />
    </BrowserRouter>
}

ReactDOM.render(RouterWrappedApp(), document.getElementById("app"));